import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-calculation',
  templateUrl: './add-calculation.component.html',
  styleUrls: ['./add-calculation.component.css']
})
export class AddCalculationComponent {
  id: any;
  // settings:any;
  calculation: any;
  formdata: any;
  ot_amount: number = 0;
  ot: number = 0;
  ot_rate: number = 60;
  pf: number = 0;
  basic_salary: number = 0;

  gross_salary: number = 0;
  hra_amount: number = 0;
  conveyance: number = 0;
  esic: number = 0;
  pt: number = 200;
  pt1: number = 175;
  salary_advance: number = 0;
  deduction: number = 0;
  net_payable_amount: number = 0;
  months: any;
  years: any;
  present: any;
  absent: any;
  start_date:any;
  end_date:any;


  total_ot_amount() {
    this.ot_amount = this.ot * this.ot_rate;

  }

  total_pf_amount() {
    this.pf = Number(this.basic_salary) * 12 / 100;
  }

  total_gross_salary_amount() {
    this.gross_salary = Number(this.basic_salary) + Number(this.hra_amount) + Number(this.conveyance) + Number(this.ot);
  }
  total_esic_amount() {
    this.esic = Number(this.gross_salary) / 100 * 0.75;
  }

  total_deduction() {
    this.deduction = Number(this.pf) + Number(this.esic) + Number(this.pt) + Number(this.salary_advance);
  }
  total_net_payable_amount() {
    this.net_payable_amount = Number(this.gross_salary) - Number(this.deduction);
  }

  calculate_present_days() {
    var date1:any = new Date(this.start_date);
    var date2:any = new Date(this.end_date);
    var present:any = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

    return present;
  }

  calculate_absent_days() {
    var date1:any = new Date(this.start_date);
    var date2:any = new Date(this.end_date);
    var absent:any = Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));

    return absent;
  }

  // calculate_absent_days() {
  //   const date1Modified = new Date(this.start_date);
  //   const date2Modified = new Date(this.end_date);

  //   const Time = Math.abs(date2Modified.getTime() - date1Modified.getTime());
  //   this.absent = Time / (1000 * 3600 * 24)

  // }


  constructor(private api: ApiService) {


  }


  ngOnInit(): void {
    this.formdata = new FormGroup({
      id: new FormControl(""),
      ot: new FormControl("", Validators.required),
      ot_rate: new FormControl("", Validators.required),
      ot_amount: new FormControl("", Validators.required),
      pf: new FormControl("", Validators.required),
      basic_salary: new FormControl("", Validators.required),
      hra_amount: new FormControl("", Validators.required),
      conveyance: new FormControl("", Validators.required),
      gross_salary: new FormControl("", Validators.required),
      esic: new FormControl("", Validators.required),
      pt: new FormControl("", Validators.required),
      salary_advance: new FormControl("", Validators.required),
      deduction: new FormControl("", Validators.required),
      net_payable_amount: new FormControl("", Validators.required),
      months: new FormControl("", Validators.required),
      years: new FormControl("", Validators.required),
      present: new FormControl("", Validators.required),
      absent: new FormControl("", Validators.required),
      start_date: new FormControl("", Validators.required),
      end_date: new FormControl("", Validators.required)


    });
  }


  onClickSubmit(data: any) {
    this.api.put("calculation/save", data).subscribe((result: any) => {
      console.log(data);
      console.log(result.data);
      window.location.replace("/admin/calculation");

    });

  }

}
