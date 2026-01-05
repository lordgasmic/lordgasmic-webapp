import { Component, NgZone, OnInit } from '@angular/core';
import { OrderingService } from '../services/ordering/ordering.service';
import { OrderingRequest } from '@models/lordgasmic-ordering/OrderingRequest';
import { PrintType } from '@models/PrintType';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { Router } from '@angular/router';
import { OrderingOptions } from '@models/lordgasmic-ordering/OrderingOptions';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OrderingForm } from '@models/lordgasmic-ordering/OrderingForm';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {
  orderingOptions: OrderingOptions[] = [
    { name: 'Water', value: 'WATER', options: ['Ice', 'Stanley'] },
    { name: 'Salty Snacks', value: 'SALTY_SNACKS', options: ['Chips', 'Nuts'] },
    { name: 'Sweet Snacks', value: 'SWEET_SNACKS', options: ['Candy', 'Cereal'] },
    { name: 'Wine', value: 'WINE', options: [] },
    { name: 'Other', value: 'OTHER', options: [] }
  ];

  waterFG: FormGroup<OrderingForm>;
  saltySnacksFG: FormGroup<OrderingForm>;
  sweetSnacksFG: FormGroup<OrderingForm>;
  wineFG: FormGroup<OrderingForm>;
  otherFG: FormGroup<OrderingForm>;

  // imDisabled = true;

  constructor(
    private orderingService: OrderingService,
    private router: Router,
    private zone: NgZone,
    private toastService: ToastMessageService,
    private fb: FormBuilder
  ) {}
  //
  ngOnInit(): void {
    this.waterFG = this.fb.group<OrderingForm>({ mainCheckbox: undefined, name: undefined, orderingOptions: undefined });
  }
  //   this.waterFG = this.fb.group<OrderingForm>({
  //     name: new FormControl('Water'),
  //     mainCheckbox: new FormControl(false),
  //     orderingOptions: this.fb.group<OrderingOptionsForm>({
  //       staticOptions: this.fb.array<FormGroup<StaticOptionsForm>>([
  //         this.fb.group<StaticOptionsForm>({
  //           name: new FormControl('Ice'),
  //           value: new FormControl({ value: false, disabled: true })
  //         }),
  //         this.fb.group<StaticOptionsForm>({
  //           name: new FormControl('Stanley'),
  //           value: new FormControl({ value: false, disabled: true })
  //         })
  //       ]),
  //       dynamicOptions: this.fb.array<FormControl<string>>([new FormControl({ value: '', disabled: true })])
  //     })
  //   });
  //
  //   this.waterFG.controls.mainCheckbox.valueChanges.subscribe((value) => {
  //     this.imDisabled = !value;
  //     this.waterFG.controls.orderingOptions.controls.staticOptions.controls.forEach((fg) => {
  //       this.imDisabled ? fg.controls.value.disable() : fg.controls.value.enable();
  //     });
  //     this.waterFG.controls.orderingOptions.controls.dynamicOptions.controls.forEach((control) => {
  //       this.imDisabled ? control.disable() : control.enable();
  //     });
  //   });
  // }
  //
  // addDynamicOptionRow(): void {
  //   this.waterFG.controls.orderingOptions.controls.dynamicOptions.controls.push(new FormControl(''));
  // }
  //
  // removeDynamicOptionRow(index: number): void {
  //   this.waterFG.controls.orderingOptions.controls.dynamicOptions.controls.splice(index, 1);
  // }

  submit(): void {
    const properties: { [key: string]: string[] } = {};

    if (this.waterFG.controls.mainCheckbox.value) {
      const modifiers: string[] = [];
      this.waterFG.controls.orderingOptions.controls.staticOptions.controls.forEach((control) => {
        if (control.value.value) {
          modifiers.push(control.value.name);
        }
      });
      this.waterFG.controls.orderingOptions.controls.dynamicOptions.controls.forEach((control) => {
        if (control.value) {
          modifiers.push(control.value);
        }
      });
      properties[this.waterFG.controls.name.value] = modifiers;
    }

    const orderingRequest: OrderingRequest = { message: 'Wifey needy', type: PrintType.RECEIPT.toString(), properties };

    this.orderingService.placeOrder(orderingRequest).subscribe(() => {
      this.toastService.showToastMessage('Order submitted', 4000); // todo
      this.zone.run(() => this.router.navigate([`/portal`]));
    });
  }

  clear(): void {
    this.waterFG.controls.mainCheckbox.reset({ value: false, disabled: false });
    this.waterFG.controls.orderingOptions.controls.staticOptions.controls.forEach((fg) => {
      fg.controls.value.reset({ value: false, disabled: true });
    });
    this.waterFG.controls.orderingOptions.controls.dynamicOptions.clear();
    this.waterFG.controls.orderingOptions.controls.dynamicOptions.push(new FormControl({ value: '', disabled: true }));
  }

  history(): void {}
}
