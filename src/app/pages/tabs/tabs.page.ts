import {
  Component,
  EnvironmentInjector,
  inject,
  Signal,
  signal,
} from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline, flameOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector: Signal<EnvironmentInjector> = signal(
    inject(EnvironmentInjector),
  );

  constructor() {
    addIcons({ peopleOutline, flameOutline });
  }
}
