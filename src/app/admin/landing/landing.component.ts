import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  
  // constructor(private api:ApiService){}
  ngOnInit(): void {
// this.api.get("category/list").subscribe((result:any)=>{
//   console.log(result);
//   this.categories = result.data;
// })
  }

}
