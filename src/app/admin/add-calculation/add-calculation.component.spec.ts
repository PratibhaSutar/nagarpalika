import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalculationComponent } from './add-calculation.component';

describe('AddCalculationComponent', () => {
  let component: AddCalculationComponent;
  let fixture: ComponentFixture<AddCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
