import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchResults } from '../search-results.model';

@Component({
  selector: 'github-search-page-numbers',
  templateUrl: './page-numbers.component.html',
  styleUrls: ['./page-numbers.component.scss'],
})
export class PageNumbersComponent {
  @Output() selectedPage = new EventEmitter<number>();

  @Input() results: SearchResults = {
    total_count: 0,
    incomplete_results: false,
    items: [],
    page: 0,
    pages: [],
    start: 1,
  };

  nextPage() {
    this.gotoPage(this.results.page + 1);
  }

  previousPage() {
    this.gotoPage(this.results.page - 1);
  }

  gotoPage(pageNumber: number) {
    this.selectedPage.emit(pageNumber);
  }
}
