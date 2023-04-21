import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
 
  settings:any;
  totalLength:any;
  page:number = 1;
formdata:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.bind();


  }
  bind() {
  
    this.api.get("setting/list").subscribe((result: any) => {
      console.log(result);
      this.settings = result.data;
    });

    this.formdata = new FormGroup(
      {
        id:new FormControl(""),
        name:new FormControl("", Validators.required),
       
      }
    );

  }

  delete(id: string) {
    if (confirm("Sure to Delete")) {
      console.log(id)
  
      this.api.delete('setting/delete/' + id).subscribe((result: any) => {
        this.bind();
        console.log(result)
      })
      }
    }
    //alert(id);
  }