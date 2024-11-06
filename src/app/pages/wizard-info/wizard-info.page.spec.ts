import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardInfoPage } from './wizard-info.page';

describe('WizardInfoPage', () => {
  let component: WizardInfoPage;
  let fixture: ComponentFixture<WizardInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
