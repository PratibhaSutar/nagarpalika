import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  isLoading = false;
  formdata: any;
  drivers: any;
  categories:any;

  totalLength:any;
  page:number = 1;
 

  constructor(private api: ApiService) { }
  ngOnInit(): void {
   this.bind();

  }

  bind() {
    this.api.get("drivers/list").subscribe((result: any) => {
      //console.log(result);
      this.drivers = result.data;
      this.totalLength = result.length;
    });
    /*this.formdata = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("",Validators.required),
      pcid: new FormControl("",Validators.required),
      description: new FormControl("",Validators.required),
      specification: new FormControl("",Validators.required),
      mrp: new FormControl("",Validators.required),
      price: new FormControl("",Validators.required),
      instock : new FormControl("",Validators.required),
      isactive : new FormControl("",Validators.required),
      image: new FormControl("")

    })*/
  }

 

  /*imageChanged(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      if (reader.result != null) {
        this.imagestring = reader.result.toString();
      }
    }
  }*/

  edit(id: string) {
    this.api.post("drivers/update", { data: { id: id } }).subscribe((result: any) => {
      let driver = result.data;
      this.formdata = new FormGroup({
        id: new FormControl(driver._id),
        name: new FormControl(driver.name, Validators.required),
        category_id: new FormControl(driver.category_id, Validators.required),
        advance_payment: new FormControl(driver.advance_payment),
        date: new FormControl(driver.date)
    });
this.bind();
    });
  }
  delete(id: string) {
    if (confirm("Sure to Delete?")) {
      this.api.post("drivers/delete", { data: { id: id } }).subscribe((result: any) => {
        this.bind();
      });
    }
  }


}
