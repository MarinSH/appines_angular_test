import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Spell } from 'src/app/models/spell';
import { Wizard } from 'src/app/models/wizard';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  private apiUrl = 'https://hp-api.onrender.com/api';

  spellSignal = signal<Spell[]>([]);
  wizardSignal = signal<Wizard[]>([]);
  wizardInfoSignal = signal<Wizard | null>(null);

  constructor(private http: HttpClient) {}

  // TODO : move in a specific service
  fetchSpells(): void {
    this.http
      .get<Spell[]>(`${this.apiUrl}/spells`)
      .subscribe((res: Spell[]) => {
        this.spellSignal.set(res);
      });
  }

  fetchWizards(): void {
    this.http
      .get<Wizard[]>(`${this.apiUrl}/characters`)
      .subscribe((res: Wizard[]) => {
        this.wizardSignal.set(res);
      });
  }

  fetchWizardById(id: string): void {
    this.http.get<Wizard[]>(`${this.apiUrl}/characters`).subscribe({
      next: (data) => {
        const wizard = data.find(character => character.id === id);
        if (wizard) {
          this.wizardInfoSignal.set(wizard);
        } else {
          console.error('Wizard not found ID:', id);
        }
      },
      error: (error) => console.error('Error when retrieving wizard information:', error),
    });
  }
}
