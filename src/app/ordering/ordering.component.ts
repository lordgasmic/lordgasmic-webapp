import { Component, NgZone, OnInit } from '@angular/core';
import { OrderingService } from '../services/ordering/ordering.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderingRequest } from '@models/OrderingRequest';
import { PrintType } from '@models/PrintType';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { Router } from '@angular/router';
import { OrderingForm } from '@models/OrderingForm';
import { OrderingOptions } from '@models/OrderingOptions';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {
  formGroup: FormGroup<OrderingForm>;
  orderingOptions: OrderingOptions[] = [
    { name: 'Water', value: 'WATER', options: ['Ice', 'Stanley'] },
    { name: 'Salty Snacks', value: 'SALTY_SNACKS', options: ['Chips', 'Nuts'] },
    { name: 'Sweet Snacks', value: 'SWEET_SNACKS', options: ['Candy', 'Cereal'] },
    { name: 'Wine', value: 'WINE', options: [] },
    { name: 'Other', value: 'OTHER', options: [] }
  ];

  constructor(
    private orderingService: OrderingService,
    private router: Router,
    private zone: NgZone,
    private toastService: ToastMessageService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      rows: this.fb.array([
        this.fb.group({
          name: [''],
          selectedOption: [false],
          additionalOptions: this.fb.array<boolean>([]),
          writeIn: ['']
        })
      ])
    });
  }

  ngOnInit(): void {
    // todo init form
    for (let i = 0; i <= this.orderingOptions.length; i++) {
      this.formGroup.controls.rows.value[i].name = this.orderingOptions[i].name;
      this.formGroup.controls.rows.value[i].selectedOption = false;
      // this.formGroup.controls.rows.value[i].additionalOptions = this.orderingOptions[i].name;
      this.formGroup.controls.rows.value[i].writeIn = '';
    }
  }

  submit(): void {
    const properties: { [key: string]: string[] } = {};
    console.log(this.formGroup);
    this.formGroup.value.rows.forEach((row, i) => {
      console.log(i);
      console.log(row);
      if (row.selectedOption) {
        properties[this.orderingOptions[i].value] = [];
      }
    });
    const orderingRequest: OrderingRequest = { message: 'Wifey needy', type: PrintType.RECEIPT.toString(), properties };

    this.orderingService.placeOrder(orderingRequest).subscribe(() => {
      this.toastService.showToastMessage('Order submitted', 4000); // todo
      this.zone.run(() => this.router.navigate([`/portal`]));
    });
  }
}
