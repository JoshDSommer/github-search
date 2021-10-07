import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNumbersComponent } from './page-numbers/page-numbers.component';
import { SearchResultsViewComponent } from './search-results-view/search-results-view.component';
import { SearchResultsComponent } from './search-results.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SearchResultsComponent,
    PageNumbersComponent,
    SearchResultsViewComponent,
  ],
  exports: [SearchResultsComponent],
})
export class SearchResultModule {}
