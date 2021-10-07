import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { searchRoutes } from './search-feature.routes';
import { SearchResultModule } from './search-results/search-results.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
    SearchResultModule,
    SearchModule,
  ],
})
export class SearchFeatureModule {}
