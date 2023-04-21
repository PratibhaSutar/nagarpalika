import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendenceComponent } from './add-attendence.component';

describe('AddAttendenceComponent', () => {
  let component: AddAttendenceComponent;
  let fixture: ComponentFixture<AddAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
