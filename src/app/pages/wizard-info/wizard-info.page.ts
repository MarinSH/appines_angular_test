import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonChip,
  IonSpinner,
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';
import { chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { WizardCardInfoComponent } from 'src/app/components/wizard-card-info/wizard-card-info.component';

@Component({
  selector: 'app-wizard-info',
  templateUrl: './wizard-info.page.html',
  styleUrls: ['./wizard-info.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonChip,
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    WizardCardInfoComponent,
  ],
})
export class WizardInfoPage {
  isLoading = signal(true);
  hideHeader = signal(true);
  wizardSignal = this.hpApiService.wizardInfoSignal;
  route = inject(ActivatedRoute);
  private router = inject(Router);
  defaultImage = signal<string>('assets/image/wizard-not-found.png');

  constructor(private hpApiService: HpApiService) {
    addIcons({ chevronBackOutline });
  }

  async ngOnInit() {
    const wizardId = this.route.snapshot.paramMap.get('id');
    if (wizardId) {
      try {
        this.isLoading.set(true);
        await this.hpApiService.fetchWizardById(wizardId);
      } finally {
        this.isLoading.set(false);
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/wizards'], {
      replaceUrl: true,
    });
  }

  wizardImage = computed(() => {
    const wizard = this.wizardSignal();
    return wizard?.image || this.defaultImage();
  });

  formattedAlternateNames = computed(() => {
    const wizard = this.wizardSignal();
    return wizard?.alternate_names.join(' · ') || '';
  });

  chips = computed(() => {
    const wizardData = this.wizardSignal();
    const chips = [];

    if (wizardData?.species) {
      chips.push({ label: wizardData.species, class: 'custom-chip-species' });
    }
    if (wizardData?.species === 'human' && !wizardData.wizard) {
      chips.push({ label: 'muggles', class: 'custom-chip-wizard' });
    } else if (wizardData?.wizard) {
      chips.push({ label: 'wizard', class: 'custom-chip-wizard' });
    }
    if (wizardData?.house) {
      chips.push({ label: wizardData.house, class: 'custom-chip-house' });
    }

    return chips;
  });
}
