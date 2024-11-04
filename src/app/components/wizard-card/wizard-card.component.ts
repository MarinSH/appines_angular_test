import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Wizard } from 'src/app/models/wizard';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  standalone: true,
})
export class WizardCardComponent {
  wizard = input.required<Wizard | undefined>();
  wizardSignal = this.hpApiService.wizardSignal;
  private router = inject(Router);


  formattedAlternateNames = computed(() => {
    const wizard = this.wizard();
    return wizard?.alternate_names.join(' · ') || '';
  });

  constructor(private hpApiService: HpApiService) {}


  goToWizardInfo(wizardName?: string): void {
    if (wizardName) { 
      this.router.navigate(['/wizards/wizard-info', encodeURIComponent(wizardName)]);
    } else {
      console.error('Le nom du sorcier est indéfini.');
    }
  }
}
