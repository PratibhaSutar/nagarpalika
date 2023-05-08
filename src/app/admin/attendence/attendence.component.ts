import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

   
formdata:any;
attendences:any;
show:boolean = false;
  totalLength:any;
  page:number = 1;
  
  searchId:any;
  searchName:any;
  searchMobile:any;
  searchCategory:any;

categories:any;
employee_detail:any;
employee_details:any;
present:any;
absent:any;
// attendence:number =0;

startdate:any;
enddate:any;
filterAttendence:any;
total:any;
constructor(private api:ApiService){

}
ngOnInit(): void {
  // this.api.get("employee_details/list").subscribe((result:any)=>{
  //   this.employee_details = result.data;
    
  //   });
  
  this.api.get("category/list").subscribe((result:any)=>{
    this.categories = result.data;
    
    });
  this.bind();
  
}
edit(id:string){
  //alert(id);
    this.api.post("attendences/update", +id).subscribe((result:any)=>{
      console.log(result);
      
      this.formdata = new FormGroup(
        {
          id:new FormControl(""),
        category_id:new FormControl("", Validators.required),
        // employee_details_id:new FormControl("", Validators.required),
        // date:new FormControl("", Validators.required),
        startdate: new FormControl((new Date()).toISOString().substring(0, 10)),
        enddate:new FormControl((new Date()).toISOString().substring(0, 10)),
        present:new FormControl("", Validators.required),
        absent:new FormControl("", Validators.required),
  });
    });
   }


   bind() {
    this.api.get("attendences/list").subscribe((result: any) => {
      console.log(result);
      this.attendences = result.data;
      
      this.filterAttendence = result.data;
      // this.filterAttendence.forEach(this.filterAttendence => {
      // this.total += parseInt(this.filterAttendence.present)
      //   });
      
    });
    
    // this.api.get("attendences/list").subscribe((result: any) => {
    //   //console.log(result);
    //   this.attendences = result.data;
    //   this.filterAttendence = result.data;
    //   // this.attendences.forEach(this.attendences => {
    //   //   this.attendence += parseInt(this.attendences.present)
    //   // });
    //  console.log(result);
    // });

    this.formdata = new FormGroup(
      {
        id:new FormControl(""),
        category_id:new FormControl("", Validators.required),
        // employee_details_id:new FormControl("", Validators.required),
        // date:new FormControl("", Validators.required),
        startdate: new FormControl((new Date()).toISOString().substring(0, 10)),
        enddate:new FormControl((new Date()).toISOString().substring(0, 10)),
        attendence:new FormControl("", Validators.required),
        present:new FormControl("", Validators.required),
        absent:new FormControl("", Validators.required)
      }
    );

  }
   delete(id: string) {
  if (confirm("Sure to Delete")) {
    console.log(id)
    this.api.delete('attendences/delete/' + id).subscribe((result: any) => {
      this.bind();
      console.log(result)
    })
    }
  }

// onDateSelected() {
// debugger
//    let startDate = +new Date(this.startdate);
//      let endDate = +new Date(this.enddate);
//     let result = this.attendences.filter((data: any) => {
//        return + new Date(data.startdate) >= startDate && +new Date(data.enddate) <= endDate;
//     })
//     this.filterAttendence = result;
//     console.log(result);
//     // this.filterAttendence = result.data;
//      this.show = !this.show;
//     }

  

}
