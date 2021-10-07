import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },
  {
    path: 'search',
    loadChildren: () =>
      import('../../../../libs/search/src/lib/search-feature.module').then(
        (module) => module.SearchFeatureModule
      ),
  },
];
