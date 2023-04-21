import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LandingComponent } from './landing/landing.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';
import { AddAdvancePaymentComponent } from './add-advance-payment/add-advance-payment';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { DriversComponent } from './drivers/drivers.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { AddAttendenceComponent } from './add-attendence/add-attendence.component';
import { AddEmployeeWagesComponent } from './add-employee-wages/add-employee-wages.component';
import { EmployeeWagesComponent } from './employee-wages/employee-wages.component';
import { SalaryComponent } from './salary/salary.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SettingComponent } from './setting/setting.component';
import { AddSettingComponent } from './add-setting/add-setting.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdvancePaymentComponent } from './advance-payment/advance-payment.component';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CalculationComponent } from './calculation/calculation.component';
import { AddCalculationComponent } from './add-calculation/add-calculation.component';
import { HomeComponent } from './home/home.component';
// import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader/public-api';


@NgModule({
  declarations: [
    DashboardComponent,

    LandingComponent,
     EmployeeDetailsComponent,
     AddEmployeeDetailsComponent,
     AddAdvancePaymentComponent,
     AdvancePaymentComponent,
     AddDriversComponent,
     DriversComponent,
     AttendenceComponent,
     AddAttendenceComponent,
     AddEmployeeWagesComponent,
     EmployeeWagesComponent,
     SalaryComponent,
     AddSalaryComponent,
     SettingComponent,
     AddSettingComponent,
     AddCategoryComponent,
     CategoryComponent,
     CalculationComponent,
     AddCalculationComponent,
     HomeComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    // NgxUiLoaderModule,
    // NgxUiLoaderHttpModule
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  NgxPaginationModule,
DatePipe ]
})
export class AdminModule { }
