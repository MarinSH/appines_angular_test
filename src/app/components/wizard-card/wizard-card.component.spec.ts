import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardCardComponent } from './wizard-card.component';

describe('WizardCardComponent', () => {
  let component: WizardCardComponent;
  let fixture: ComponentFixture<WizardCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WizardCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WizardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
