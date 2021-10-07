import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'github-search-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Input() query = '';
  @Output() queryChanged = new EventEmitter<string>();
  constructor() {}
}
