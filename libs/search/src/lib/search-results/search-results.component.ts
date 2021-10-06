import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SearchResults } from './search-results.model';
import { UsersService } from './users.service';

@Component({
  selector: 'github-search-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  results$: Observable<SearchResults> | undefined;
  subscription: Subscription | undefined;
  constructor(
    private userSearch: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.results$ = this.userSearch.searchResults();
  }

  ngAfterViewInit() {
    this.subscription = this.activatedRoute.queryParams
      .pipe(
        tap((queryParams) =>
          this.userSearch.search(queryParams?.query, queryParams?.page || 1)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
