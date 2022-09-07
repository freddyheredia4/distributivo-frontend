import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeComboboxComponent } from './grade-combobox.component';

describe('GradeComboboxComponent', () => {
  let component: GradeComboboxComponent;
  let fixture: ComponentFixture<GradeComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeComboboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
