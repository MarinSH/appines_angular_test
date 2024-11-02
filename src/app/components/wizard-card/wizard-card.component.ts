import { Component, computed, input } from '@angular/core';
import { Wizard } from 'src/app/models/wizard';

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  standalone: true,
})
export class WizardCardComponent {

  wizard = input.required<Wizard | undefined>();
  
  constructor() { }

  formattedAlternateNames = computed(() => {
    const wizard = this.wizard(); 
    return wizard?.alternate_names.join(' · ') || ''; 
  });

}
