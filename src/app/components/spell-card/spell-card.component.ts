import {Component, input } from '@angular/core';
import {Spell} from "../../models/spell";

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss'],
  standalone: true
})
export class SpellCardComponent {

  // TODO : migrate with new input signal
  spell = input.required<Spell | undefined>();

  constructor() { }

}
