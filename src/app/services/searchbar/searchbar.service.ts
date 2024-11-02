import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  private searchQueries = {
    spell: signal<string>(''), 
    wizard: signal<string>(''),
  };

  setActiveSearchQuery(type: 'spell' | 'wizard', query: string) {
    if (this.searchQueries[type]) {
      this.searchQueries[type].set(query);
    } else {
      console.error(`Type de recherche inconnu : ${type}`); 
    }
  }

  getActiveSearchQuery(type: 'spell' | 'wizard') {
    return this.searchQueries[type]; 
  }
}
