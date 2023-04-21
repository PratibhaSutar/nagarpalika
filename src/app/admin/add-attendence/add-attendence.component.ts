import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-attendence',
  templateUrl: './add-attendence.component.html',
  styleUrls: ['./add-attendence.component.css']
})
export class AddAttendenceComponent implements OnInit {

 id:any;
  present: any;
  absent: any;
  category_id:string = '';
  // employee_details_id:string = '';
  formdata: any;
  categories: any;
  employee_details: any;
  addattendence: any;
  attendences: any;

  startdate: any;
  enddate: any;
  filteredAttendence: any;
  //show:boolean = false;

  totalLength: any;
  page: number = 1;
  selectedValue: any;
  selectedEmployee: any;
  filteredEmployeeList: any;
  date: any;
  

  constructor(private api: ApiService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {

    this.bind();


    this.id = this.route.snapshot.paramMap.get("id");
    //alert(this.id);
    window.scroll(0, 0);
    this.api.get("category/list").subscribe((result: any) => {
      this.categories = result.data;

    });

  //   this.api.get("employee_details/list").subscribe((result: any) => {
  //     this.employee_details = result.data;
  //     this.filteredEmployeeList = result.data;

  //     console.log(this.filteredEmployeeList);
  //     this.filteredEmployeeList = this.filteredEmployeeList.filter((filteredEmployeeList: any) => {
  //       if (filteredEmployeeList.category_id && this.selectedValue == '1')
  //         return true
  //       else
  //         return false
  //     });
  //  });

    if (this.id != null) {
      this.api.get("attendences/list").subscribe((result: any) => {
        console.log(result);
        this.addattendence = result.data;

        this.bind();
      });
    }
    else {
      this.bind();
    }

  }
  bind() {


    this.api.get("attendences/list").subscribe((result: any) => {
      console.log(result);
      this.addattendence = result.data;
      this.filteredAttendence = result.data;
    });
    this.formdata = new FormGroup({
      id: new FormControl(this.addattendence != null ? this.id : ""),
      category_id: new FormControl(this.addattendence != null ? this.addattendence.category_id : "", Validators.required),
      // employee_details_id: new FormControl(this.addattendence != null ? this.addattendence.employee_details_id : "", Validators.required),
      name: new FormControl(this.addattendence != null ? this.addattendence.name : "", Validators.required),
      startdate: new FormControl((new Date()).toISOString().substring(0, 10)),
      // enddate:new FormControl((new Date()).toISOString().substring(0, 10)),
      date: new FormControl((new Date()).toISOString().substring(0, 10)),
      // sDate:new FormControl((new Date()).toISOString().substring(0, 10)),
      present: new FormControl(this.addattendence != null ? this.addattendence.present : [1], Validators.required),
      absent: new FormControl(this.addattendence != null ? this.addattendence.absent : [0], Validators.required),
      // absent:new FormControl("", Validators.required),
      // present:new FormControl("", Validators.required),
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
        // this.filteredAttendence =this.filteredEmployeeList.filter((filteredEmployeeList:any)=>{
        //   if(this.filteredEmployeeList == "1")
        //   return true;
        //   else
        //   return false;
        //     })
        
     this.filteredAttendence = result;
     console.log(result);
        //this.show = !this.show;
    
    });

   
  
  // if(this.selectedEmployee == this.filteredEmployeeList.name )
    
  //  return true;
  // else
  //  return false;

 }
  // onDateSelected() {

  //   let startDate = +new Date(this.startdate);
  //     let endDate = +new Date(this.enddate);
  //     let result = this.addattendence.filter((data: any) => {
  //       return + new Date(data.date) >= startDate && +new Date(data.date) <= endDate;
  //    })
  //      this.filteredAttendence = result;
  //    console.log(result);
  //   }




  //}


  // this.filteredAttendence = result1.data;
    // this.filteredEmployeeList = this.filteredEmployeeList.filter((filteredEmployeeList: any) => {

    //   if (this.selectedValue == filteredEmployeeList.category_id)
    //     return true;
    //   else
    //     return false;

    // });
  onClickSubmit(data: any) {

    this.api.put("attendences/save", data).subscribe((result: any) => {
      console.log(data);

      console.log(result.data);

      window.location.replace("/admin/attendence");

    });

  }



}