import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerToolbarComponent } from './career-toolbar.component';

describe('CareerToolbarComponent', () => {
  let component: CareerToolbarComponent;
  let fixture: ComponentFixture<CareerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
