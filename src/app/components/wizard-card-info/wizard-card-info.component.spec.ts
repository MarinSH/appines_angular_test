import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardCardInfoComponent } from './wizard-card-info.component';

describe('WizardCardInfoComponent', () => {
  let component: WizardCardInfoComponent;
  let fixture: ComponentFixture<WizardCardInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WizardCardInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WizardCardInfoComponent);
    component = fixture.componentInstance;

    const mockWizard = {
      id: '12345',
      name: 'Harry Potter',
      alternate_names: ['The Boy Who Lived', 'Chosen One'],
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
      image: 'https://link-to-image.com/harry-potter.jpg',
    };

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
