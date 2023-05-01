import { ThisReceiver } from '@angular/compiler';
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

  id: any;
  present: any;
  absent: any;
  category_id: string = '';
  formdata: any;
  selectedDate:any;
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
  filteredEmployeeList: any;
  
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
      name: new FormControl(this.addattendence != null ? this.addattendence.name : "", Validators.required),
      startdate: new FormControl((new Date()).toISOString().substring(0, 10)),

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
        filteredEmployeeList["present"] = 1;
        filteredEmployeeList["absent"] = 0;

        filteredEmployeeList["startdate"] = new Date();
        if (this.selectedValue == filteredEmployeeList.category_id)
        
          return filteredEmployeeList;        
      });
      console.log(this.filteredEmployeeList);
      
    //let startDate = +new Date(this.startdate);
      // let endDate = +new Date(this.enddate);
      //var result = this.addattendence.filter((data: any) => {
        // return + new Date(data.date) >= startDate && +new Date(data.date) <= endDate;
                //return + new Date(data.startdate) >= startDate ;

      //})
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
  }
  
  
// onDateSelected(){
//   this.date = Date.now();
// }
//   // onDateSelected() {

  //   let startDate = +new Date(this.startdate);
  //     let endDate = +new Date(this.enddate);
  //     let result = this.addattendence.filter((data: any) => {
  //       return + new Date(data.date) >= startDate && +new Date(data.date) <= endDate;
  //    })
  //      this.filteredAttendence = result;
  //    console.log(result);
  //   }




  //}

  onClickSubmit(data: any) {
    debugger
  console.log(this.filteredEmployeeList);
  
//console.log(this.startdate);
   for(let i = 0; i < this.filteredEmployeeList.length;i++){
    
     console.log(this.filteredEmployeeList.length)
  this.api.put("attendences/save", this.filteredEmployeeList[i]).subscribe((result: any) => {
    // this.api.put("attendences/save",data).subscribe((result: any) => {

              
          
  console.log(result.data);

  });
   }
    }
   // window.location.replace("/admin/attendence");

  }