import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWagesComponent } from './employee-wages.component';

describe('EmployeeWagesComponent', () => {
  let component: EmployeeWagesComponent;
  let fixture: ComponentFixture<EmployeeWagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
