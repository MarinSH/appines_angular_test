import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardInfoPage } from './wizard-info.page';
import { ActivatedRoute, Router } from '@angular/router';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';
import { SearchbarService } from 'src/app/services/searchbar/searchbar.service';
import { signal } from '@angular/core';

describe('WizardInfoPage', () => {
  let component: WizardInfoPage;
  let fixture: ComponentFixture<WizardInfoPage>;

  beforeEach(async () => {
    const hpApiServiceSpy = jasmine.createSpyObj(
      'HpApiService',
      ['fetchWizardById'],
      {
        wizardInfoSignal: signal(undefined),
      },
    );

    await TestBed.configureTestingModule({
      imports: [WizardInfoPage, IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: {} },
        { provide: HpApiService, useValue: hpApiServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1', //fake id
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
