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
employee_details_id:any;
filteredEmployeeList:any;
filteredEmployeeSalary:any;
filteredSalary:any;
selectedValueCategory:any;
selectedValueEmployee:any;

gross_salary: number = 0;
salary: number = 0;
hra_amount: number = 1000;
conveyance: number = 500;
esic: number = 200;
pf: number = 0;
pt: number = 200;
pt1: number = 175;
basic_salary: number = 25000;
outstanding_amount: number = 0;
  ot: number = 0;
  total_pf_amount() {
    this.pf = Number(this.basic_salary) * 12 / 100;
  }
  total_esic_amount() {
    this.gross_salary = Number(this.basic_salary) + Number(this.hra_amount) + Number(this.conveyance) + Number(this.ot);

    this.esic = Number(this.gross_salary) / 100 * 0.75;
  }
  total_salary() {
    this.salary = Number(this.basic_salary) + Number(this.hra_amount) + Number(this.conveyance)
    -  Number(this.pf) -  Number(this.pt)  -  Number(this.esic);

  }
constructor(private api:ApiService, private route:ActivatedRoute) {}

ngOnInit(): void {
  this.bind();
  this.id = this.route.snapshot.paramMap.get("id");
  //alert(this.id);
  window.scroll(0, 0);
  this.api.get("category/list").subscribe((result: any) => {
    this.categories = result.data;

  });

// this.api.get("employee_details/list").subscribe((result:any)=>{
//   console.log(result);
//   this.employee_details = result.data;

//   });

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
    debugger
    this.api.get("salary/list").subscribe((result: any) => {
      console.log(result);
      this.addsalary = result.data;
      this.filteredSalary = result.data;


    });
    this.formdata = new FormGroup({
      id: new FormControl(this.addsalary != null ? this.id : ""),
    category_id:new FormControl(this.addsalary != null ? this.addsalary.category_id : "" , Validators.required),
      employee_details_id:new FormControl(this.addsalary != null ? this.addsalary.employee_details_id: "" , Validators.required),
      date:new FormControl((new Date()).toISOString().substring(0,10)),
      days:new FormControl(this.addsalary != null ? this.addsalary.days : "" , Validators.required),
      pf:new FormControl(this.addsalary != null ? this.addsalary.pf : "" , Validators.required),
      pt:new FormControl(this.addsalary != null ? this.addsalary.pt : "" , Validators.required),
      esic:new FormControl(this.addsalary != null ? this.addsalary.esic : "" , Validators.required),
      salary:new FormControl(this.addsalary != null ? this.addsalary.salary : "" , Validators.required),
    ot:new FormControl(this.addsalary != null ? this.addsalary.ot : "" , Validators.required),
      advance_amount:new FormControl(this.addsalary != null ? this.addsalary.advance_amount: "" , Validators.required),
      net_salary:new FormControl(this.addsalary != null ? this.addsalary.net_salary : "" , Validators.required),
      paid_amount:new FormControl(this.addsalary != null ? this.addsalary.paid_amount : "" , Validators.required),
      outstanding_amount:new FormControl(this.addsalary != null ? this.addsalary.outstanding_amount : "" , Validators.required),
    
    });
  }

  onCategorySelected() {
    debugger
        this.api.get("employee_details/list").subscribe((result: any) => {
          this.filteredEmployeeList = result.data;
          this.filteredEmployeeList = this.filteredEmployeeList.filter((filteredEmployeeList: any) => {
           
            if (this.selectedValueCategory == filteredEmployeeList.category_id)
    
              return filteredEmployeeList;        
          });
    
          console.log(this.filteredEmployeeList);
      
    
          this.filteredSalary = result;
          console.log(result);
          //this.show = !this.show;
    
        });
    
      }

      onEmployeeSelected() {
        debugger
            this.api.get("employee_details/list").subscribe((result: any) => {
              this.filteredEmployeeList = result.data;
              this.filteredEmployeeList = this.filteredEmployeeList.filter((filteredEmployeeList: any) => {
               
                if (this.selectedValueEmployee == filteredEmployeeList.id)
      
                return this.salary = filteredEmployeeList.basic_salary;

                       
              });
        
              console.log(this.filteredEmployeeList);
          
        
              this.filteredEmployeeList = result;
              console.log(result);
              //this.show = !this.show;
        
            });
        
          }
     
  // onOptionsSelected() {
  //   debugger
  //   this.api.get("employee_details/list").subscribe((result: any) => {
  //     this.employee_details = result.data;
  //     this.employee_details = this.employee_details.filter((employee_details: any) => {
      
  //       if (this.selectedValue == employee_details.category_id )
        
  //         return employee_details;  
          
        
         
  //     });
  //     console.log(this.employee_details);
  //     this.filteredSalary = result;
  //     console.log(result);

  //       // let startDate = +new Date(this.startdate);
  //       // let endDate = +new Date(this.enddate);
  //       // var result = this.addattendence.filter((data: any) => {
  //       //   return + new Date(data.date) >= startDate && +new Date(data.date) <= endDate;
  //       // })
  //       // this.filteredAttendence = result;
  //       // console.log(result);
  //       // this.show = !this.show;
  //   });
  // }



  
onClickSubmit(data:any){

  this.api.put("salary/save", data).subscribe((result:any)=>{
    console.log(data);
  console.log(result.data);
  window.location.replace("/admin/salary");

});

}

}