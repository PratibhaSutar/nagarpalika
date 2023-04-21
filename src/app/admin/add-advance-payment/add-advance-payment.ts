import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-advance-payment',
  templateUrl: './add-advance-payment.html',
  styleUrls: ['./add-advance-payment.css']
})
export class AddAdvancePaymentComponent implements OnInit {
  public value = new Date();

  id:any;
formdata:any;
categories:any;
employee_details:any;
addadvancepayment:any;

  constructor(private api:ApiService, private route:ActivatedRoute){
       
 }
  ngOnInit(): void{

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
this.api.get("advance_payment/list").subscribe((result:any)=>{
console.log(result);
this.addadvancepayment = result.data;
this.bind();
});
  }
  else{
    this.bind();
  }
   
  }
  bind(){
    this.formdata = new FormGroup({
      id:new FormControl(this.addadvancepayment != null ? this.id : "" ),
    category_id:new FormControl(this.addadvancepayment != null ? this.addadvancepayment.category_id : "" , Validators.required),
      employee_details_id:new FormControl(this.addadvancepayment != null ? this.addadvancepayment.employee_details_id: "" , Validators.required),
      // date:new FormControl(this.addadvancepayment != null ? this.addadvancepayment.date : "" , Validators.required),
      date:new FormControl((new Date()).toISOString().substring(0,10)),

      advance_payment:new FormControl(this.addadvancepayment != null ? this.addadvancepayment.advance_payment : "" , Validators.required)
    });
  }
onClickSubmit(data:any){

  this.api.put("advance_payment/save", data).subscribe((result:any)=>{
    console.log(data);
  console.log(result.data);
  window.location.replace("/admin/advance-payment");

});

}
  
}
