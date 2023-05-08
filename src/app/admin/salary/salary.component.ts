import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  formdata:any;
    salaries:any;
    totalLength:any;
    page:number = 1;
    filterSalary:any;
    
  constructor(private api:ApiService){
  
  }
  ngOnInit(): void {
   
    this.bind();
    
  }
  edit(id:string){
    //alert(id);
      this.api.post("salary/update", +id).subscribe((result:any)=>{
        console.log(result);
        
        this.formdata = new FormGroup(
          {
            id:new FormControl(""),
          category_id:new FormControl("", Validators.required),
          employee_details_id:new FormControl("", Validators.required),
          date:new FormControl("", Validators.required),
          pf:new FormControl("", Validators.required),
          pt:new FormControl("", Validators.required),
          esic:new FormControl("", Validators.required),
          salary:new FormControl("", Validators.required),
          ot:new FormControl("", Validators.required),
          advance_amount:new FormControl("", Validators.required),
          net_salary:new FormControl("", Validators.required),
          paid_amount:new FormControl("", Validators.required),
          outstanding_amount:new FormControl("", Validators.required)
    });
      });
     }
  
  
    //  bind() {
    
    //   this.api.get("salary/list").subscribe((result: any) => {
    //     console.log(result);
    //     this.salaries = result.data;
    //   });
  
    //   this.formdata = new FormGroup(
    //     {
    //       id:new FormControl(""),
    //       category_id:new FormControl("", Validators.required),
    //       employee_details_id:new FormControl("", Validators.required),
    //       date:new FormControl("", Validators.required),
    //       days:new FormControl("", Validators.required),
    //       pf:new FormControl("", Validators.required),
    //       pt:new FormControl("", Validators.required),
    //       esic:new FormControl("", Validators.required),
    //       salary:new FormControl("", Validators.required),
    //       ot:new FormControl("", Validators.required),
    //       advance_amount:new FormControl("", Validators.required),
    //       net_salary:new FormControl("", Validators.required),
    //       paid_amount:new FormControl("", Validators.required),
    //       outstanding_amount:new FormControl("", Validators.required)

    //     }
    //   );
  
    // }

    bind() {
      this.api.get("salary/list").subscribe((result: any) => {
        console.log(result);
        this.salaries = result.data;
        
        this.filterSalary = result.data;
       
      });
      
     
  
      this.formdata = new FormGroup(
        {
          id:new FormControl(""),
          category_id:new FormControl("", Validators.required),
          employee_details_id:new FormControl("", Validators.required),
          date:new FormControl("", Validators.required),
          days:new FormControl("", Validators.required),
          pf:new FormControl("", Validators.required),
          pt:new FormControl("", Validators.required),
          esic:new FormControl("", Validators.required),
          salary:new FormControl("", Validators.required),
          ot:new FormControl("", Validators.required),
          advance_amount:new FormControl("", Validators.required),
          net_salary:new FormControl("", Validators.required),
          paid_amount:new FormControl("", Validators.required),
          outstanding_amount:new FormControl("", Validators.required)
        }
      );
  
    }
     delete(id: string) {
    if (confirm("Sure to Delete")) {
      console.log(id)
  
      this.api.delete('salary/delete/' + id).subscribe((result: any) => {
        this.bind();
        console.log(result)
      })
      }
    }
  
  }
  
