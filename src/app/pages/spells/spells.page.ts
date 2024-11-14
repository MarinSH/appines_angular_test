import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SpellCardComponent } from '../../components/spell-card/spell-card.component';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { SearchbarService } from 'src/app/services/searchbar/searchbar.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    SpellCardComponent,
    IonSearchbar,
    SearchbarComponent,
  ],
})
export class SpellsPage implements OnInit {
  // TODO : use signal
  spellsSignal = this.hpApiService.spellSignal;

  // TODO : use signal
  searchInput = signal<string>('');

  // TODO : use computed signal
  protected filteredSpells = computed(() => {
    const search = this.searchService
      .getActiveSearchQuery('spell')()
      .toLowerCase()
      .trim();
    const spells = this.spellsSignal();

    if (!search) {
      return spells;
    }

    const filtered = spells.filter(spell =>
      spell.name.toLowerCase().includes(search),
    );

    return filtered;
  });

  constructor(
    private hpApiService: HpApiService,
    private searchService: SearchbarService,
  ) {}

  ngOnInit() {
    this.hpApiService.fetchSpells();
  }
}
