import { Component, NgZone } from '@angular/core';
import { OrderingService } from '../services/ordering/ordering.service';
import { OrderExtra, OrderingRequest, OrderItem } from '@models/lordgasmic-ordering/OrderingRequest';
import { PrintType } from '@models/PrintType';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { Router } from '@angular/router';
import { OrderingOptions } from '@models/lordgasmic-ordering/OrderingOptions';
import { FormBuilder, FormControl } from '@angular/forms';
import { OrderingForm } from '@models/lordgasmic-ordering/OrderingForm';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent {
  orderingOptions: OrderingOptions[] = [];

  constructor(
    private orderingService: OrderingService,
    private router: Router,
    private zone: NgZone,
    private toastService: ToastMessageService,
    private fb: FormBuilder
  ) {
    const formGroup = this.fb.group<OrderingForm>({ mainCheckbox: undefined, name: undefined, orderingOptions: undefined });

    this.orderingOptions.push({ name: 'Water', value: 'WATER', options: ['Ice', 'Stanley'], formGroup });
    this.orderingOptions.push({ name: 'Salty Snacks', value: 'SALTY_SNACKS', options: ['Chips', 'Nuts'], formGroup });
    this.orderingOptions.push({ name: 'Sweet Snacks', value: 'SWEET_SNACKS', options: ['Candy', 'Cereal'], formGroup });
    this.orderingOptions.push({ name: 'Wine', value: 'WINE', options: [], formGroup });
    this.orderingOptions.push({ name: 'Other', value: 'OTHER', options: [], formGroup });
  }

  submit(): void {
    const properties: OrderItem[] = [];

    this.orderingOptions.forEach((option) => {
      if (option.formGroup.controls.mainCheckbox.value) {
        const extras: OrderExtra[] = [];
        option.formGroup.controls.orderingOptions.controls.staticOptions.controls.forEach((control) => {
          if (control.value.value) {
            extras.push({ extra: control.value.name, type: 'checkbox' });
          }
        });
        option.formGroup.controls.orderingOptions.controls.dynamicOptions.controls.forEach((control) => {
          if (control.value) {
            extras.push({ extra: control.value, type: 'textbox' });
          }
        });
        properties.push({ item: option.formGroup.controls.name.value, extras });
      }
    });

    const orderingRequest: OrderingRequest = { message: 'Wifey needy', type: PrintType.RECEIPT.toString(), properties };

    this.orderingService.placeOrder(orderingRequest).subscribe(() => {
      this.toastService.showToastMessage('Order submitted', 4000); // todo
      this.zone.run(() => this.router.navigate([`/portal`]));
    });
  }

  clear(): void {
    this.orderingOptions.forEach((option) => {
      option.formGroup.controls.mainCheckbox.reset({ value: false, disabled: false });
      option.formGroup.controls.orderingOptions.controls.staticOptions.controls.forEach((fg) => {
        fg.controls.value.reset({ value: false, disabled: true });
      });
      option.formGroup.controls.orderingOptions.controls.dynamicOptions.clear();
      option.formGroup.controls.orderingOptions.controls.dynamicOptions.push(new FormControl({ value: '', disabled: true }));
    });
  }

  history(): void {
    this.zone.run(() => this.router.navigateByUrl('/ordering/history'));
  }
}
