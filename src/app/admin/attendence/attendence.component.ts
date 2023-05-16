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
selectedDate:any;
startdate:any;
enddate:any;
filterAttendence:any;
filteredPresentList:any;
total:any;
constructor(private api:ApiService){

}
ngOnInit(): void {
 
  this.bind();
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
      
      this.filteredPresentList = result.data;
     
      
    });
    
  

    this.formdata = new FormGroup(
      {
        id:new FormControl(""),
        category_id:new FormControl("", Validators.required),
       date:new FormControl("", Validators.required),
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

onDateSelected() {
let presentCount = 0;
let absentCount = 0;
let startDate = + new Date(this.startdate);
let endDate = + new Date(this.enddate);  
    let result = this.attendences.filter((presentList:any)=>{
      if(presentList.present == "1")
      return true;

      return + new Date(presentList.startdate) >= startDate && +new Date(presentList.startdate) <= endDate;

      

  });
  this.filteredPresentList = result;
    console.log(result);
   
    this.show = !this.show;

  }
}

