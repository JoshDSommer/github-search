import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchResultModule } from './search-results/search-results.module';
import { searchRoutes } from './search.routes';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
    SearchResultModule,
  ],
  declarations: [SearchComponent],
})
export class SearchModule {}
