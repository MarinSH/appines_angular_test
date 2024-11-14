import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardCardInfoComponent } from './wizard-card-info.component';
import { signal, WritableSignal } from '@angular/core';
import { Wizard } from 'src/app/models/wizard';
import { Router } from '@angular/router';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';

describe('WizardCardInfoComponent', () => {
  let component: WizardCardInfoComponent;
  let fixture: ComponentFixture<WizardCardInfoComponent>;
  let router: jasmine.SpyObj<Router>;
  let hpApiService: jasmine.SpyObj<HpApiService>;
  let mockWizardValue: Wizard;
  let mockWizardSignal: WritableSignal<Wizard>;

  beforeEach(async () => {
    mockWizardValue = {
      id: '1',
      name: 'Harry Potter',
      alternate_names: ['The Chosen One', 'The Boy Who Lived'],
      species: 'human',
      gender: 'male',
      house: 'Gryffindor',
      dateOfBirth: '31-07-1980',
      yearOfBirth: 1980,
      wizard: true,
      ancestry: 'half-blood',
      eyeColour: 'green',
      hairColour: 'black',
      wand: {
        wood: 'holly',
        core: 'phoenix feather',
        length: 11,
      },
      patronus: 'stag',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Daniel Radcliffe',
      alternate_actors: [],
      alive: true,
      image: 'http://example.com/harry.jpg',
    };

    mockWizardSignal = signal(mockWizardValue);

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const hpApiServiceSpy = jasmine.createSpyObj('HpApiService', [], {
      wizardSignal: signal<Wizard | undefined>(undefined),
    });

    await TestBed.configureTestingModule({
      imports: [WizardCardInfoComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: HpApiService, useValue: hpApiServiceSpy },
      ],
    }).compileComponents();

    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    hpApiService = TestBed.inject(HpApiService) as jasmine.SpyObj<HpApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCardInfoComponent);
    component = fixture.componentInstance;

    (component as any).wizard = mockWizardSignal;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
