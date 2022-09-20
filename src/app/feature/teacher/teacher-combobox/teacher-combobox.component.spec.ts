import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherComboboxComponent } from './teacher-combobox.component';

describe('TeacherComboboxComponent', () => {
  let component: TeacherComboboxComponent;
  let fixture: ComponentFixture<TeacherComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherComboboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
