import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SearchResults } from '../search-results.model';

@Component({
  selector: 'github-search-search-results-view',
  templateUrl: './search-results-view.component.html',
  styleUrls: ['./search-results-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsViewComponent {
  @Input() results: SearchResults = {
    total_count: 0,
    incomplete_results: false,
    items: [],
    page: 0,
    pages: [],
  };
}
