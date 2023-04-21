import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.css']
})
export class AddDriversComponent {
  id: any;
  
  formdata: any;
  driver: any;
  categories: any;

  //totalLength:any;
  //page:number = 1;


  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id = this.route.snapshot.paramMap.get("id");
    //alert(this.id);
    this.api.get("category/list").subscribe((result: any) => {
      this.categories = result.data;
    });

    if(this.id != null) {
      this.api.get("drivers/list").subscribe((result: any) => {
        this.driver = result.data;
        //console.log(result);
        this.bind();
      });

    } else {
      this.bind();
    }
  }

  onClickSubmit(data: any) {
    this.api.put("drivers/save",data).subscribe((result: any) => {
      this.driver = result.data;
      console.log(result);
      this.router.navigate(['/admin/drivers']);
    
    })
  }

  bind() {
    this.formdata = new FormGroup({
      id: new FormControl(this.driver != null ? this.id : ""),
      date: new FormControl(this.driver != null ? this.driver.date : "", Validators.required),
      category_id: new FormControl(this.driver != null ? this.driver.category_id : "", Validators.required),
      name: new FormControl(this.driver != null ? this.driver.name : "", Validators.required),
      advance_payment: new FormControl(this.driver != null ? this.driver.advance_payment : "", Validators.required),
     

    })
  }
  

 
}
