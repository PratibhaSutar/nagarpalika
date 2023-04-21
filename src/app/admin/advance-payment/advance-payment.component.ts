import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-advance-payment',
  templateUrl: './advance-payment.component.html',
  styleUrls: ['./advance-payment.component.css']
})
export class AdvancePaymentComponent implements OnInit {
  formdata:any;
  advancepayments:any;
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
    this.api.post("advance_payment/update", +id).subscribe((result:any)=>{
      console.log(result);
      
      this.formdata = new FormGroup(
        {
          id:new FormControl(""),
        category_id:new FormControl("", Validators.required),
        employee_details_id:new FormControl("", Validators.required),
        date:new FormControl("", Validators.required),
        advance_payment:new FormControl("", Validators.required)
  });
    });
   }


   bind() {
  
    this.api.get("advance_payment/list").subscribe((result: any) => {
      console.log(result);
      this.advancepayments = result.data;
    });

    this.formdata = new FormGroup(
      {
        id:new FormControl(""),
        category_id:new FormControl("", Validators.required),
        employee_details_id:new FormControl("", Validators.required),
        date:new FormControl("", Validators.required),
        advance_payment:new FormControl("", Validators.required)
      }
    );

  }
   delete(id: string) {
  if (confirm("Sure to Delete")) {
    console.log(id)

    this.api.delete('advance_payment/delete/' + id).subscribe((result: any) => {
      this.bind();
      console.log(result)
    })
    }
  }

}
