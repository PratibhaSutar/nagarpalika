import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories:any;
  totalLength:any;
  page:number = 1;
formdata:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.bind();


  }
  bind() {
  
    this.api.get("category/list").subscribe((result: any) => {
      console.log(result);
      this.categories = result.data;
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
  
      this.api.delete('category/delete/' + id).subscribe((result: any) => {
        this.bind();
        console.log(result)
      })
      }
    }
    //alert(id);
  }