import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'github-search-page-numbers',
  templateUrl: './page-numbers.component.html',
  styleUrls: ['./page-numbers.component.scss'],
})
export class PageNumbersComponent {
  @Input() page = 1;
  @Input() numberOfPages: number[] = [];
  @Output() selectedPage = new EventEmitter<number>();

  nextPage() {
    this.gotoPage(this.page + 1);
  }

  previousPage() {
    this.gotoPage(this.page - 1);
  }

  gotoPage(pageNumber: number) {
    this.selectedPage.emit(pageNumber);
  }
}
