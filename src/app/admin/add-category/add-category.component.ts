import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category:any;
  formdata:any;
 
  constructor(private api:ApiService) {

   
  }


   ngOnInit(): void {
    this.formdata = new FormGroup({
      id:new FormControl(""),
      name:new FormControl("",Validators.pattern('^[a-zA-Z \-\']+'))

      
    });
  }
  

 onClickSubmit(data:any){
this.api.put("category/save", data).subscribe((result:any)=>{
  console.log(data);
console.log(result.data);
window.location.replace("/admin/category");
});

}

}
