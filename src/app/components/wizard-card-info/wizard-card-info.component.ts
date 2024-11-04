import { Component, computed, input, OnInit } from '@angular/core';
import { Wizard } from 'src/app/models/wizard';

@Component({
  selector: 'app-wizard-card-info',
  templateUrl: './wizard-card-info.component.html',
  styleUrls: ['./wizard-card-info.component.scss'],
  standalone: true,
})
export class WizardCardInfoComponent {
  wizard = input.required<Wizard>();

  constructor() { }

  ngOnInit() {}

  formatDate(dateString: string): string {
    if (!dateString) {
      return '🪄 Obliviate'; 
    }

    const [day, month, year] = dateString.split('-').map(Number);
  
    const date = new Date(year, month - 1, day);
  
    const monthName = date.toLocaleString('en-US', { month: 'long' }); 
    const suffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    return `${monthName} ${day}${suffix(day)} ${year}`; 
  }
  
  details = computed(() =>
    [
      { label: 'Gender', value: this.wizard().gender },
      { label: 'Birth', value: this.formatDate(this.wizard().dateOfBirth) },
      { label: 'Eye Colour', value: this.wizard().eyeColour },
      { label: 'Hair Colour', value: this.wizard().hairColour },
      { label: 'Patronus', value: this.wizard().patronus },
    ].map(attr => ({
      ...attr,
      value: attr.value !== null && attr.value !== "" ? attr.value : "🪄 Obliviate"
    }))
  );

  isLast(index: number): boolean {
    return index === this.details().length - 1;
  }
}
