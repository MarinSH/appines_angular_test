import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpellCardComponent } from './spell-card.component';
import { signal, WritableSignal } from '@angular/core';
import { Spell } from 'src/app/models/spell';
import { Router } from '@angular/router';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';

describe('SpellCardComponent', () => {
  let component: SpellCardComponent;
  let fixture: ComponentFixture<SpellCardComponent>;
  let router: jasmine.SpyObj<Router>;
  let hpApiService: jasmine.SpyObj<HpApiService>;
  let mockSpellValue: Spell;
  let mockSpellSignal: WritableSignal<Spell>;

  beforeEach(async () => {
    mockSpellValue = {
      id: '1',
      name: 'obliviate',
      description: "Erases the target's memory",
    };

    mockSpellSignal = signal(mockSpellValue);

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const hpApiServiceSpy = jasmine.createSpyObj('HpApiService', [], {
      spellSignal: signal<Spell | undefined>(undefined),
    });

    await TestBed.configureTestingModule({
      imports: [SpellCardComponent, IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: HpApiService, useValue: hpApiServiceSpy },
      ],
    }).compileComponents();

    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    hpApiService = TestBed.inject(HpApiService) as jasmine.SpyObj<HpApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardComponent);
    component = fixture.componentInstance;

    (component as any).spell = mockSpellSignal;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
