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
    { name: 'Water', value: 'water', options: ['Ice', 'Stanley'] },
    { name: 'Salty Snacks', value: 'salty-snacks', options: ['Chips', 'Nuts'] },
    { name: 'Sweet Snacks', value: 'sweet-snacks', options: ['Candy', 'Cereal'] },
    { name: 'Wine', value: 'wine', options: [] },
    { name: 'Other', value: 'other', options: [] }
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
          selectedOption: [false],
          additionalOptions: this.fb.array<boolean>([]),
          writeIn: ['']
        })
      ])
    });
  }

  ngOnInit(): void {
    // todo init form
  }

  submit(): void {
    const properties: { [key: string]: string[] } = {};
    this.formGroup.value.rows.forEach((row, i) => {
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
