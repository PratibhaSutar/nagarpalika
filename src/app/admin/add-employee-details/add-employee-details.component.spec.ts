import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeDetailsComponent } from './add-employee-details.component';

describe('AddEmployeeDetailsComponent', () => {
  let component: AddEmployeeDetailsComponent;
  let fixture: ComponentFixture<AddEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
