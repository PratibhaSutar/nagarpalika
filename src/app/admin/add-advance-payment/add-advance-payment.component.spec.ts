import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvancePaymentComponent } from './add-advance-payment';

describe('AddAdvancePaymentComponent', () => {
  let component: AddAdvancePaymentComponent;
  let fixture: ComponentFixture<AddAdvancePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvancePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvancePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
