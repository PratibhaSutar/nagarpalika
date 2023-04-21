import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-employee-wages',
  templateUrl: './add-employee-wages.component.html',
  styleUrls: ['./add-employee-wages.component.css']
})
export class AddEmployeeWagesComponent implements OnInit {
  id:any;
formdata:any;
categories:any;
employee_details:any;
addemployeewage:any;
constructor(private api:ApiService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    //alert(this.id);
    window.scroll(0,0);
this.api.get("category/list").subscribe((result:any)=>{
this.categories = result.data;
});

this.api.get("employee_details/list").subscribe((result:any)=>{
  this.employee_details = result.data;
  });

  if(this.id != null){
this.api.get("employee_wages/list").subscribe((result:any)=>{
console.log(result);
this.addemployeewage = result.data;
this.bind();
});
  }
  else{
    this.bind();
  }
   
  }
  bind(){
    this.formdata = new FormGroup({
      id:new FormControl(this.addemployeewage != null ? this.id : "" ),
    category_id:new FormControl(this.addemployeewage != null ? this.addemployeewage.category_id : "" , Validators.required),
      employee_details_id:new FormControl(this.addemployeewage != null ? this.addemployeewage.employee_details_id: "" , Validators.required),
      // bank_acno:new FormControl(this.addemployeewage != null ? this.addemployeewage.bank_acno : "" , Validators.required),
      // ifsc_code:new FormControl(this.addemployeewage != null ? this.addemployeewage.ifsc_code : "" , Validators.required),
      pd:new FormControl(this.addemployeewage != null ? this.addemployeewage.pd : "" , Validators.required),
      ot:new FormControl(this.addemployeewage != null ? this.addemployeewage.ot : "" , Validators.required),
        ot_rate:new FormControl(this.addemployeewage != null ? this.addemployeewage.ot_rate: "" , Validators.required),
        ot_amount:new FormControl(this.addemployeewage != null ? this.addemployeewage.ot_amount : "" , Validators.required),
        gross_amount:new FormControl(this.addemployeewage != null ? this.addemployeewage.gross_amount : "" , Validators.required),
        advance:new FormControl(this.addemployeewage != null ? this.addemployeewage.advance: "" , Validators.required),
        pf:new FormControl(this.addemployeewage != null ? this.addemployeewage.pf: "" , Validators.required),

        total_deduction:new FormControl(this.addemployeewage != null ? this.addemployeewage.total_deduction : "" , Validators.required),
        remark:new FormControl(this.addemployeewage != null ? this.addemployeewage.remark : "" , Validators.required)
    });
  }
onClickSubmit(data:any){

  this.api.put("employee_wages/save", data).subscribe((result:any)=>{
    console.log(data);
  console.log(result.data);
  window.location.replace("/admin/employee-wages");

});

}

}
