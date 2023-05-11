import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {
  id:any;
  formdata: any;
  categories: any;
employeedetail:any;
clicked = false;


// basic_salary:number=0;
// hra:string = '';
// conveyance:string='';
// total(){
// this.basic_salary = parseInt(this.hra) + parseInt(this.conveyance);
// }
constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

ngOnInit(): void {
  
  window.scrollTo(0, 0);
  this.id = this.route.snapshot.paramMap.get("id");
  //alert(this.id);
  this.api.get("category/list").subscribe((result: any) => {
    this.categories = result.data;
  });


  

  if(this.id != null) {
    this.api.get("employee_details/list").subscribe((result: any) => {
      
      this.employeedetail = result.data;
      //console.log(result);
      this.bind();
    });

  } 
  else {

    this.bind();
  }

  
}


  // getfromcategory(category_id: string){
  //   this.api.get("employee_details/list/" + category_id).subscribe((result: any) => {
  //     console.log(result);
  //     this.employeedetails = result.data;
  //     });
  //   }
  onClickSubmit(data:any){
    this.api.put("employee_details/save", data).subscribe((result:any)=>{
      console.log(result);
    //console.log(result.data);
    //this.router.navigate(['/admin/employee-details']);
  });
    
    }

    bind(){
      this.formdata = new FormGroup({
        id: new FormControl(this.employeedetail != null ? this.id : ""),
        date: new FormControl(this.employeedetail != null ? this.employeedetail.date : "", Validators.required),
        category_id: new FormControl(this.employeedetail != null ? this.employeedetail.category_id : "", Validators.required),
        name: new FormControl(this.employeedetail != null ? this.employeedetail.name : "",[Validators.required, Validators.pattern("^[a-zA-Z \-\']+")]), 
        mobile_no: new FormControl(this.employeedetail != null ? this.employeedetail.mobile_no : "",[Validators.required, Validators.pattern("[- +()0-9]{10,12}")]),
        bank_acno: new FormControl(this.employeedetail != null ? this.employeedetail.bank_acno : "", [Validators.required, Validators.pattern("^[0-9]{9,18}$"), Validators.maxLength(15)]),
        ifsc_code: new FormControl(this.employeedetail != null ? this.employeedetail.ifsc_code : "",[ Validators.required, Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
        uan_no: new FormControl(this.employeedetail != null ? this.employeedetail.uan_no : "",[Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(12)]),
        esic_icno: new FormControl(this.employeedetail != null ? this.employeedetail.esic_icno : "", [Validators.required, Validators.pattern("^([0-9]{2})[\–\-]([0-9]{2})[\–\-]([0-9]{6})[\–\-]([0-9]{3})[\–\-]([0-9]{4})$")]),
        basic_salary: new FormControl(this.employeedetail != null ? this.employeedetail.basic_salary : "", Validators.required),
        hra: new FormControl(this.employeedetail != null ? this.employeedetail.hra : "", Validators.required),
        conveyance: new FormControl(this.employeedetail != null ? this.employeedetail.conveyance : "", Validators.required),
        address: new FormControl(this.employeedetail != null ? this.employeedetail.address : "", Validators.required)
  

      });
    
  
    }
}


