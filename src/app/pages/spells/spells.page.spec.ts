import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellsPage } from './spells.page';
import { HpApiService } from 'src/app/services/hpApi/hp-api.service';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
import { SearchbarService } from 'src/app/services/searchbar/searchbar.service';

describe('SpellsPage', () => {
  let component: SpellsPage;
  let fixture: ComponentFixture<SpellsPage>;

  beforeEach(async () => {
    const hpApiServiceSpy = jasmine.createSpyObj(
      'HpApiService',
      ['fetchSpells'],
      {
        spellSignal: signal([]),
      },
    );
    const searchServiceSpy = jasmine.createSpyObj('SearchbarService', [
      'getActiveSearchQuery',
    ]);
    searchServiceSpy.getActiveSearchQuery.and.returnValue(() => '');

    await TestBed.configureTestingModule({
      imports: [SpellsPage, IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: {} },
        { provide: HpApiService, useValue: hpApiServiceSpy },
        { provide: SearchbarService, useValue: searchServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
