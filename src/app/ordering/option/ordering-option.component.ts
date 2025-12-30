import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderingForm } from '@models/lordgasmic-ordering/OrderingForm';

@Component({
  selector: 'app-ordering-option',
  templateUrl: './ordering-option.component.html',
  styleUrls: ['./ordering-option.component.scss']
})
export class OrderingOptionComponent implements OnInit {
  @Input('option')
  formGroup: FormGroup<OrderingForm>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
