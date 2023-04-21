import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-setting',
  templateUrl: './add-setting.component.html',
  styleUrls: ['./add-setting.component.css']
})
export class AddSettingComponent {
  setting:any;
  formdata:any;
 
  constructor(private api:ApiService) {
   
  }


   ngOnInit(): void {
    this.formdata = new FormGroup({
      id:new FormControl(""),
      ot_rate:new FormControl("", Validators.required)

    });
  }
  

 onClickSubmit(data:any){
this.api.put("setting/save", data).subscribe((result:any)=>{
  console.log(data);
console.log(result.data);
window.location.replace("/admin/setting");
});

}

}
