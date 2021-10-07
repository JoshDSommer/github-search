import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SearchResults } from './search-results.model';
interface SearchState {
  query: string;
  selectedPage: number;
  searchUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private searchUrl = 'https://api.github.com/search/users';
  private searchState = new Subject<SearchState>();

  constructor(private http: HttpClient) {}

  searchResults() {
    return this.searchState.pipe(
      switchMap((searchState) => this.searchForUsers(searchState))
    );
  }

  private calculateNumberOfPages(totalCount: number, pageLength: number) {
    const remainingResults = totalCount % pageLength;
    const totalCountWithRemainderVariance =
      totalCount + (pageLength - remainingResults);
    const totalPages = totalCountWithRemainderVariance / pageLength;
    const pagesAsArray = Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
    return pagesAsArray;
  }

  private searchForUsers(searchState: SearchState) {
    return this.http
      .get<SearchResults>(
        `${searchState.searchUrl}?q=${searchState.query}&page=${searchState.selectedPage}`
      )
      .pipe(
        map(
          (searchResults) =>
            ({
              ...searchResults,
              page: searchState.selectedPage,
              pages: this.calculateNumberOfPages(
                searchResults.total_count,
                searchResults.items.length
              ),
            } as SearchResults)
        )
      );
  }

  search(query: string, selectedPage: number) {
    this.searchState.next({
      query,
      selectedPage,
      searchUrl: this.searchUrl,
    });
  }
}
