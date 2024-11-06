import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { WizardCardComponent } from 'src/app/components/wizard-card/wizard-card.component';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { SearchbarService } from 'src/app/services/searchbar/searchbar.service';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.page.html',
  styleUrls: ['./wizards.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    WizardCardComponent,
    SearchbarComponent,
  ],
})
export class WizardsPage {
  wizardSignal = this.hpApiService.wizardSignal;

  protected filteredWizards = computed(() => {
    const search = this.searchService
      .getActiveSearchQuery('wizard')()
      .toLowerCase()
      .trim();
    const wizards = this.wizardSignal();

    if (!search) {
      return wizards;
    }

    return wizards.filter(wizard => wizard.name.toLowerCase().includes(search));
  });

  constructor(
    private hpApiService: HpApiService,
    private searchService: SearchbarService,
  ) {}

  ngOnInit() {
    this.hpApiService.fetchWizards();
  }
}
