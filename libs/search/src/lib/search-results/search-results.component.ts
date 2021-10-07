import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersService } from './users.service';

@Component({
  selector: 'github-search-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements AfterViewInit, OnDestroy {
  results$ = this.userSearch.searchResults();
  subscription: Subscription | undefined;
  constructor(
    private userSearch: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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

  pageChange(page: number) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page },
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  queryChange(query: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { query, page: 1 },
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }
}
