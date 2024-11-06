import {
  Component,
  computed,
  EnvironmentInjector,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline, flameOutline } from 'ionicons/icons';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterLink],
})
export class TabsPage {
  public environmentInjector: Signal<EnvironmentInjector> = signal(
    inject(EnvironmentInjector),
  );

  private currentUrl = signal(this.router.url);

  isNotWizardInfoPage = computed(
    () => !this.currentUrl().includes('/wizard-info/'),
  );

  constructor(private router: Router) {
    addIcons({ peopleOutline, flameOutline });
    this.monitorRouteChanges();
  }

  private monitorRouteChanges() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        map((event: NavigationEnd) => event.url),
      )
      .subscribe(url => {
        this.currentUrl.set(url);
      });
  }
}
