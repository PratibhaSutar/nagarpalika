// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { ApiService } from 'src/app/api.service';

// @Component({
//   selector: 'app-add-salary',
//   templateUrl: './add-salary.component.html',
//   styleUrls: ['./add-salary.component.css']
// })
// export class AddSalaryComponent implements OnInit {
//   id:any;
// formdata:any;
// categories:any;
// employee_details:any;
// addsalary:any;
// constructor(private api:ApiService, private route:ActivatedRoute) {}

//   ngOnInit(): void {

//     this.id = this.route.snapshot.paramMap.get("id");
//     //alert(this.id);
//     window.scroll(0,0);
// this.api.get("category/list").subscribe((result:any)=>{
// this.categories = result.data;
// });

// this.api.get("employee_details/list").subscribe((result:any)=>{
//   console.log(result);
//   this.employee_details = result.data;
//   });

//   if(this.id != null){
// this.api.get("salary/list").subscribe((result:any)=>{
// console.log(result);
// this.addsalary = result.data;
// this.bind();
// });
//   }
//   else{
//     this.bind();
//   }
   
//   }

//   bind(){
//     this.formdata = new FormGroup({
//       id:new FormControl(this.addsalary != null ? this.id : "" ),
//     category_id:new FormControl(this.addsalary != null ? this.addsalary.category_id : "" , Validators.required),
//       employee_details_id:new FormControl(this.addsalary != null ? this.addsalary.employee_details_id: "" , Validators.required),
//       // date:new FormControl(this.addsalary != null ? this.addsalary.date : "" , Validators.required),
//       date:new FormControl((new Date()).toISOString().substring(0,10)),
//       days:new FormControl(this.addsalary != null ? this.addsalary.days : "" , Validators.required),
//       salary:new FormControl(this.addsalary != null ? this.addsalary.salary : "" , Validators.required),
//       advance_amount:new FormControl(this.addsalary != null ? this.addsalary.advance_amount: "" , Validators.required),
//       net_salary:new FormControl(this.addsalary != null ? this.addsalary.net_salary : "" , Validators.required),
//       paid_amount:new FormControl(this.addsalary != null ? this.addsalary.paid_amount : "" , Validators.required)
//     });
//   }
// onClickSubmit(data:any){

//   this.api.put("salary/save", data).subscribe((result:any)=>{
//     console.log(data);
//   console.log(result.data);
//   window.location.replace("/admin/salary");

// });

// }

// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {
  id:any;
formdata:any;
categories:any;
employee_details:any;
addsalary:any;
filteredEmployeeList:any;
selectedValue:any;
constructor(private api:ApiService, private route:ActivatedRoute) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get("id");
    //alert(this.id);
    window.scroll(0,0);
this.api.get("category/list").subscribe((result:any)=>{
this.categories = result.data;
});

this.api.get("employee_details/list").subscribe((result:any)=>{
  console.log(result);
  this.employee_details = result.data;
  });

  if(this.id != null){
this.api.get("salary/list").subscribe((result:any)=>{
console.log(result);
this.addsalary = result.data;
this.bind();
});
  }
  else{
    this.bind();
  }
   
  }

  bind(){
    this.formdata = new FormGroup({
      id:new FormControl(this.addsalary != null ? this.id : "" ),
    category_id:new FormControl(this.addsalary != null ? this.addsalary.category_id : "" , Validators.required),
      employee_details_id:new FormControl(this.addsalary != null ? this.addsalary.employee_details_id: "" , Validators.required),
      // date:new FormControl(this.addsalary != null ? this.addsalary.date : "" , Validators.required),
      date:new FormControl((new Date()).toISOString().substring(0,10)),
      days:new FormControl(this.addsalary != null ? this.addsalary.days : "" , Validators.required),
      salary:new FormControl(this.addsalary != null ? this.addsalary.salary : "" , Validators.required),
      advance_amount:new FormControl(this.addsalary != null ? this.addsalary.advance_amount: "" , Validators.required),
      net_salary:new FormControl(this.addsalary != null ? this.addsalary.net_salary : "" , Validators.required),
      paid_amount:new FormControl(this.addsalary != null ? this.addsalary.paid_amount : "" , Validators.required)
    });
  }
  onOptionsSelected() {

    this.api.get("employee_details/list").subscribe((result: any) => {
      this.filteredEmployeeList = result.data;
      this.filteredEmployeeList = this.filteredEmployeeList.filter((filteredEmployeeList: any) => {

        if (this.selectedValue == filteredEmployeeList.category_id)

          return true;
        else
          return false;
      });

        // let startDate = +new Date(this.startdate);
        // let endDate = +new Date(this.enddate);
        // var result = this.addattendence.filter((data: any) => {
        //   return + new Date(data.date) >= startDate && +new Date(data.date) <= endDate;
        // })
        // this.filteredAttendence = result;
        // console.log(result);
        // this.show = !this.show;
    
    });
  }
onClickSubmit(data:any){

  this.api.put("salary/save", data).subscribe((result:any)=>{
    console.log(data);
  console.log(result.data);
  window.location.replace("/admin/salary");

});

}

}