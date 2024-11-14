import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardsPage } from './wizards.page';
import { Router } from '@angular/router';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';
import { SearchbarService } from 'src/app/services/searchbar/searchbar.service';
import { signal } from '@angular/core';

describe('WizardsPage', () => {
  let component: WizardsPage;
  let fixture: ComponentFixture<WizardsPage>;

  beforeEach(async () => {
    const hpApiServiceSpy = jasmine.createSpyObj(
      'HpApiService',
      ['fetchWizards'],
      {
        wizardSignal: signal([]),
      },
    );
    const searchServiceSpy = jasmine.createSpyObj('SearchbarService', [
      'getActiveSearchQuery',
    ]);
    searchServiceSpy.getActiveSearchQuery.and.returnValue(() => '');

    await TestBed.configureTestingModule({
      imports: [WizardsPage, IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: {} },
        { provide: HpApiService, useValue: hpApiServiceSpy },
        { provide: SearchbarService, useValue: searchServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
