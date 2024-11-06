import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonSearchbar } from '@ionic/angular/standalone';
import { SearchbarService } from 'src/app/services/searchbar/searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [IonSearchbar, FormsModule],
})
export class SearchbarComponent {
  searchType = input<'spell' | 'wizard'>('spell');

  get currentSearchType(): 'spell' | 'wizard' {
    return this.searchType();
  }

  constructor(private searchService: SearchbarService) {}

  updateSearch(event: CustomEvent) {
    const query = event.detail.value;
    this.searchService.setActiveSearchQuery(this.currentSearchType, query);
  }
}
