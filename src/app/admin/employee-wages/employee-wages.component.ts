import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employee-wages',
  templateUrl: './employee-wages.component.html',
  styleUrls: ['./employee-wages.component.css']
})
export class EmployeeWagesComponent implements OnInit {
  formdata:any;
    employeewages:any;
    totalLength:any;
    page:number = 1;
  constructor(private api:ApiService){
  
  }
  ngOnInit(): void {
    // this.api.get("attendences/list").subscribe((result:any)=>{
    //   console.log(result);
    //  this.attendences = result.data;
    // })
    this.bind();
    
  }
  edit(id:string){
    //alert(id);
      this.api.post("employee_wages/update", +id).subscribe((result:any)=>{
        console.log(result);
        
        this.formdata = new FormGroup(
          {
            id:new FormControl(""),
          category_id:new FormControl("", Validators.required),
          employee_details_id:new FormControl("", Validators.required),
          bank_acno:new FormControl("", Validators.required),
          ifsc_code:new FormControl("", Validators.required),
          pd:new FormControl("", Validators.required),
          ot:new FormControl("", Validators.required),
          ot_rate:new FormControl("", Validators.required),
          ot_amount:new FormControl("", Validators.required),
          gross_amount:new FormControl("", Validators.required),
          advance:new FormControl("", Validators.required),
          pf:new FormControl("", Validators.required),

          total_deduction:new FormControl("", Validators.required),
          remark:new FormControl("", Validators.required),

    });
      });
     }
  
  
     bind() {
    
      this.api.get("employee_wages/list").subscribe((result: any) => {
        console.log(result);
        this.employeewages = result.data;
      });
  
      this.formdata = new FormGroup(
        {
          id:new FormControl(""),
          category_id:new FormControl("", Validators.required),
          employee_details_id:new FormControl("", Validators.required),
          bank_acno:new FormControl("", Validators.required),
          ifsc_code:new FormControl("", Validators.required),
          pd:new FormControl("", Validators.required),
          ot:new FormControl("", Validators.required),
          ot_rate:new FormControl("", Validators.required),
          ot_amount:new FormControl("", Validators.required),
          gross_amount:new FormControl("", Validators.required),
          advance:new FormControl("", Validators.required),
          pf:new FormControl("", Validators.required),
          total_deduction:new FormControl("", Validators.required),
          remark:new FormControl("", Validators.required)

        }
      );
  
    }
     delete(id: string) {
    if (confirm("Sure to Delete")) {
      console.log(id)
  
      this.api.delete('employee_wages/delete/' + id).subscribe((result: any) => {
        this.bind();
        console.log(result)
      })
      }
    }
  
  }
  