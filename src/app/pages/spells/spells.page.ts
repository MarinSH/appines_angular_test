import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {SpellCardComponent} from "../../components/spell-card/spell-card.component";
import {Spell} from "../../models/spell";
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SpellCardComponent, IonSearchbar]
})
export class SpellsPage implements OnInit {

  // TODO : use signal
  spellsSignal = this.hpApiService.spellSignal;

  // TODO : use signal
  searchInput = signal<string>('');

  // TODO : use computed signal
  protected filteredSpells = signal<Spell[]>([]);

  constructor(private hpApiService: HpApiService) { }

  ngOnInit() {
    this.hpApiService.fetchSpells();
  }

  filterSpell = computed(() => {
    return this.spellsSignal().filter(spell =>
      spell.name.toLowerCase().includes(this.searchInput().toLowerCase())
    );
    
  });

}
