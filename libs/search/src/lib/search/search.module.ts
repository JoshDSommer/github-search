import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxModule } from '../shared/search-box/search-box.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, RouterModule, SearchBoxModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
