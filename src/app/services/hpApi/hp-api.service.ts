import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Spell } from 'src/app/models/spell';
import { Wizard } from 'src/app/models/wizard';

@Injectable({
  providedIn: 'root'
})
export class HpApiService {
  private apiUrl = 'https://hp-api.onrender.com/api';

  spellSignal = signal<Spell[]>([]);
  wizardSignal = signal<Wizard[]>([]);

  constructor(private http: HttpClient) { }

  // TODO : move in a specific service
  fetchSpells(): void {
    this.http.get<Spell[]>(`${this.apiUrl}/spells`).subscribe((res: Spell[])=> {
      this.spellSignal.set(res);
    });
  }

  fetchWizards(): void {
    this.http.get<Wizard[]>(`${this.apiUrl}/characters`).subscribe((res: Wizard[])=> {
      this.wizardSignal.set(res);
    });
  }
}
