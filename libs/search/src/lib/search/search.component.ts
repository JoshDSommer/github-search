import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-search-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  queryChange(query: string) {
    this.router.navigate(['results'], {
      relativeTo: this.activatedRoute,
      queryParams: { query, page: 1 },
    });
  }
}
