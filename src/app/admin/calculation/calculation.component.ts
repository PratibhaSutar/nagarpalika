import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {
  calculations: any;
  formdata: any;
  totalLength: any;
  page: number = 1;
  searchText: any;
  ot: any;
  ot_rate: any;
  ot_amount: any;
  basic_salary: any;
  pf: any;

  hra_amount: any;
  conveyance: any;
  gross_salary: any;
  esic: any;
  pt: any;
  salary_advance: any;
  deduction: any;
  net_payable_amount:any;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.bind();

  }
  bind() {

    this.api.get("calculation/list").subscribe((result: any) => {
      console.log(result);
      this.calculations = result.data;

    });

    this.formdata = new FormGroup({
      id: new FormControl(""),
      ot: new FormControl("", Validators.required),
      ot_rate: new FormControl("", Validators.required),
      ot_amount: new FormControl("", Validators.required),
      basic_salary: new FormControl("", Validators.required),

      pf: new FormControl("", Validators.required),

      hra_amount: new FormControl("", Validators.required),
      conveyance: new FormControl("", Validators.required),
      gross_salary: new FormControl("", Validators.required),
      esic: new FormControl("", Validators.required),
      pt: new FormControl("", Validators.required),
      salary_advance: new FormControl("", Validators.required),
      deduction: new FormControl("", Validators.required),
      net_payable_amount: new FormControl("", Validators.required)

    });

  }


  edit(id: string) {
    this.api.post("calculation/update", + id).subscribe((result: any) => {
      console.log(result);
      this.formdata = new FormGroup(
        {
          ot: new FormControl("", Validators.required),
          ot_rate: new FormControl("", Validators.required),
          ot_amount: new FormControl("", Validators.required),
          basic_salary: new FormControl("", Validators.required),
          pf: new FormControl("", Validators.required),
          hra_amount: new FormControl("", Validators.required),
          conveyance: new FormControl("", Validators.required),
          gross_salary: new FormControl("", Validators.required),
          esic: new FormControl("", Validators.required),
          pt: new FormControl("", Validators.required),
          salary_advance: new FormControl("", Validators.required),
          deduction: new FormControl("", Validators.required),
          net_payable_amount: new FormControl("", Validators.required)



        });
    });
  }

  delete(id: string) {

    if (confirm("Sure to Delete?")) {
      this.api.delete("calculation/delete/" + id).subscribe((result: any) => {
        this.bind();
        console.log(result);
      });

    }
  }


}
