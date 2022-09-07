import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxCareerComponent } from './combobox-career.component';

describe('ComboboxCareerComponent', () => {
  let component: ComboboxCareerComponent;
  let fixture: ComponentFixture<ComboboxCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboboxCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
