import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id: any;
  employeedetails: any;
  categories: any;
  formdata: any;
  totalLength:any;
  page:number = 1;
searchText:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.bind();

  }
  bind() {

    this.api.get("employee_details/list").subscribe((result: any) => {
      console.log(result);
      this.employeedetails = result.data;

    });

    this.formdata = new FormGroup({
      id: new FormControl(""),
      date: new FormControl("", Validators.required),

      category_id: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      mobile_no: new FormControl("", Validators.required),
      bank_acno: new FormControl("", Validators.required),
      ifsc_code: new FormControl("", Validators.required),
      uan_no: new FormControl("", Validators.required),
      esic_icno: new FormControl("", Validators.required),
      basic_salary: new FormControl("", Validators.required),
      hra: new FormControl("", Validators.required),
      conveyance: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),


    });

  }


  edit(id: string) {
    this.api.post("employee_details/update", + id).subscribe((result: any) => {
      console.log(result);
      this.formdata = new FormGroup(
        {
          category_id: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      mobile_no: new FormControl("", Validators.required),
      bank_acno: new FormControl("", Validators.required),
      ifsc_code: new FormControl("", Validators.required),
      uan_no: new FormControl("", Validators.required),
      esic_icno: new FormControl("", Validators.required),
      basic_salary: new FormControl("", Validators.required),
      hra: new FormControl("", Validators.required),
      conveyance: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required)
        });
    });
  }

  delete(id: string) {

    if (confirm("Sure to Delete?")) {
      this.api.delete("employee_details/delete/" + id).subscribe((result: any) => {
        this.bind();
        console.log(result);
      });

    }
  }


}
