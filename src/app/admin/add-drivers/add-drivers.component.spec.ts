import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriversComponent } from './add-drivers.component';

describe('AddDriversComponent', () => {
  let component: AddDriversComponent;
  let fixture: ComponentFixture<AddDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
