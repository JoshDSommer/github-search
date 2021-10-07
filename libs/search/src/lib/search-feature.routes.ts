import { Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
export const searchRoutes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'results',
    component: SearchResultsComponent,
  },
] as Routes;
