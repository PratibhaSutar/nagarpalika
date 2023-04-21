import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeWagesComponent } from './add-employee-wages.component';

describe('AddEmployeeWagesComponent', () => {
  let component: AddEmployeeWagesComponent;
  let fixture: ComponentFixture<AddEmployeeWagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeWagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeWagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
