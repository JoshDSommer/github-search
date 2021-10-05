import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { searchRoutes } from './search.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(searchRoutes)],
})
export class SearchModule {}
