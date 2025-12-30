import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderingForm } from '@models/lordgasmic-ordering/OrderingForm';

@Component({
  selector: 'app-ordering-main',
  templateUrl: './ordering-main.component.html',
  styleUrls: ['./ordering-main.component.scss']
})
export class OrderingMainComponent implements OnInit {
  waterFG: FormGroup<OrderingForm>;
  saltySnacksFG: FormGroup<OrderingForm>;
  sweetSnacksFG: FormGroup<OrderingForm>;
  wineFG: FormGroup<OrderingForm>;
  otherFG: FormGroup<OrderingForm>;

  constructor() {}

  ngOnInit(): void {}
}
