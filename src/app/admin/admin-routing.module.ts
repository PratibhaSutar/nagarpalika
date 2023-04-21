import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdvancePaymentComponent } from './add-advance-payment/add-advance-payment';
import { AddAttendenceComponent } from './add-attendence/add-attendence.component';
import { AddCalculationComponent } from './add-calculation/add-calculation.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';
import { AddEmployeeWagesComponent } from './add-employee-wages/add-employee-wages.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddSettingComponent } from './add-setting/add-setting.component';
import { AdvancePaymentComponent } from './advance-payment/advance-payment.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { CalculationComponent } from './calculation/calculation.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriversComponent } from './drivers/drivers.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeWagesComponent } from './employee-wages/employee-wages.component';
import { LandingComponent } from './landing/landing.component';
import { SalaryComponent } from './salary/salary.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:LandingComponent,
  children:[{path:"dashboard", component:DashboardComponent},
  {path:"home", component:HomeComponent},
{path:"employee-details", component:EmployeeDetailsComponent},
{path:"employee-details/:id", component:EmployeeDetailsComponent},
{path:"add-employee-details",component:AddEmployeeDetailsComponent},
{path:"add-employee-details/:id", component:AddEmployeeDetailsComponent},

{path:"category", component:CategoryComponent},
{path:"category/:id", component:CategoryComponent},
{path:"add-category", component:AddCategoryComponent},
{path:"add-category/:id", component:AddCategoryComponent},

{path:"attendence", component:AttendenceComponent},
{path:"attendence/:id", component:AttendenceComponent},
{path:"add-attendence", component:AddAttendenceComponent},
{path:"add-attendence/:id", component:AddAttendenceComponent},
{path:"add-attendence/:category_id", component:AddAttendenceComponent},

{path:"add-attendence/:category_id/:employee_details_id", component:AddAttendenceComponent},


{path:"employee-wages", component:EmployeeWagesComponent},
{path:"add-employee-wages", component:AddEmployeeWagesComponent},
{path:"employee-wages/:id", component:EmployeeWagesComponent},
{path:"add-employee-wages/:id", component:AddEmployeeWagesComponent},

{path:"add-advance-payment/:id", component:AddAdvancePaymentComponent},
{path:"advance-payment/:id", component:AdvancePaymentComponent},
{path:"add-advance-payment", component:AddAdvancePaymentComponent},
{path:"advance-payment", component:AdvancePaymentComponent},

{path:"drivers/:category_id", component:DriversComponent},
{path:"add-drivers", component:AddDriversComponent},

{path:"salary", component:SalaryComponent},
{path:"add-salary", component:AddSalaryComponent},
{path:"salary/:id", component:SalaryComponent},
{path:"add-salary/:id", component:AddSalaryComponent},

{path:"setting", component:SettingComponent},
{path:"add-setting", component:AddSettingComponent},
{path:"setting/:id", component:SettingComponent},
{path:"add-setting/:id", component:AddSettingComponent},

{path:"drivers", component:DriversComponent},
{path:"add-drivers", component:AddDriversComponent},
{path:"drivers/:id", component:DriversComponent},
{path:"add-drivers/:id", component:AddDriversComponent},

{path:"calculation", component:CalculationComponent},
{path:"add-calculation", component:AddCalculationComponent},
{path:"calculation/:id", component:CalculationComponent},
{path:"add-calculation/:id", component:AddCalculationComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
