import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata: any;
  message = "";
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.formdata = new FormGroup(
      {
        email: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      }
    )

  }

  onClickSubmit(data: any) {
    console.log(data);
    this.api.post("admin/login", data).subscribe((result:any)=>{
      console.log(result);
     
      if(result.status == "failed")
      {
this.message = result.data;   
}
else{
  localStorage.setItem("usertype", "admin");
    localStorage.setItem("email", result.data.email);
    window.location.href = "/admin/dashboard";

  // this.api.put("admin/save", data).subscribe((result:any)=>{
  //   console.log(result);
}
   
});
  }
}