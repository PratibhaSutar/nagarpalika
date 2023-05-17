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
  show:boolean = false;
  totalLength: any;
  page: number = 1;
  selectedValue: any;
  filteredEmployeeList: any;
  clicked = false;
  constructor(private api: ApiService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.bind();
    this.id = this.route.snapshot.paramMap.get("id");
    window.scroll(0, 0);
    this.api.get("category/list").subscribe((result: any) => {
      this.categories = result.data;

    });

   
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
      present: new FormControl(this.addattendence != null ? this.addattendence.present : "", Validators.required),
      absent: new FormControl(this.addattendence != null ? this.addattendence.absent : "", Validators.required),
      
    });
  }
  onEmployeeSelected() {
debugger
    this.api.get("employee_details/list").subscribe((result: any) => {
      this.filteredEmployeeList = result.data;
      this.filteredEmployeeList = this.filteredEmployeeList.filter((filteredEmployeeList: any) => {
        filteredEmployeeList["present"] = 1;
        filteredEmployeeList["absent"] = 0;

        filteredEmployeeList["startdate"] = new Date();

        if (this.selectedValue == filteredEmployeeList.category_id)

          return filteredEmployeeList;   
          this.clicked = true;
     
      });

      console.log(this.filteredEmployeeList);
      this.filteredAttendence = result;
      console.log(result);
      this.show = !this.show;

    });

  }

  onClickSubmit(data: any) {
  console.log(this.filteredEmployeeList);
   for(let i = 0; i < this.filteredEmployeeList.length;i++){
     console.log(this.filteredEmployeeList.length)
  this.api.put("attendences/save", this.filteredEmployeeList[i]).subscribe((result: any) => {
    // this.api.put("attendences/save",data).subscribe((result: any) => {   
  console.log(result.data);
  this.clicked = false;
  window.location.replace("/admin/attendence");

  });

   }

    }

  }