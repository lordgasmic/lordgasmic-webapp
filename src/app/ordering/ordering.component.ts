import { Component, NgZone, OnInit } from '@angular/core';
import { OrderingService } from '../services/ordering/ordering.service';
import { OrderingRequest } from '@models/lordgasmic-ordering/OrderingRequest';
import { PrintType } from '@models/PrintType';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { Router } from '@angular/router';
import { OrderingOptions } from '@models/lordgasmic-ordering/OrderingOptions';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OrderingForm, OrderingOptionsForm, StaticOptionsForm } from '@models/lordgasmic-ordering/OrderingForm';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {
  // @ViewChildren('menu')
  // children!: QueryList<ElementRef<HTMLInputElement>>;
  // @ViewChildren('subMenu')
  // modifiers!: QueryList<ElementRef<HTMLInputElement>>;
  // @ViewChildren('miscOption')
  // miscOption!: QueryList<ElementRef<HTMLInputElement>>;

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

  constructor(
    private orderingService: OrderingService,
    private router: Router,
    private zone: NgZone,
    private toastService: ToastMessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.waterFG = this.fb.group<OrderingForm>({
      name: new FormControl('Water'),
      mainCheckbox: new FormControl(false),
      orderingOptions: this.fb.group<OrderingOptionsForm>({
        staticOptions: this.fb.array<FormGroup<StaticOptionsForm>>([
          this.fb.group<StaticOptionsForm>({
            name: new FormControl('Ice'),
            value: new FormControl(false)
          }),
          this.fb.group<StaticOptionsForm>({
            name: new FormControl('Stanley'),
            value: new FormControl(false)
          })
        ]),
        dynamicOptions: this.fb.array<FormControl<string>>([new FormControl('')])
      })
    });
    this.initFormGroup();
  }

  initFormGroup(): void {
    for (const oo of this.orderingOptions) {
      const staticOptions: boolean[] = [];
      for (const o of oo.options) {
        staticOptions.push(false);
      }

      // this.formGroup.controls.push(
      //   this.fb.group({
      //     name: [oo.name],
      //     orderingOptions: this.fb.group<OrderingOptionsForm>({
      //       staticOptions: this.fb.array(staticOptions),
      //       dynamicOptions: this.fb.array([''])
      //     })
      //   })
      // );
    }
  }

  handleCheckboxDisabled(): void {
    // get row
    // check if checked
    // set checked on subs
  }

  addMiscOptionsRow(index: number): void {
    // this.formGroup.controls
    //   .filter((fg) => {
    //     return fg.value.name === this.orderingOptions[index].name;
    //   })
    //   .forEach((fg) => {
    //     fg.controls.orderingOptions.controls.dynamicOptions.controls.push(new FormControl(''));
    //   });
  }

  submit(): void {
    const properties: { [key: string]: string[] } = {};

    // this.children.forEach((elem) => {
    //   if (elem.nativeElement.checked) {
    //     const derp = this.modifiers
    //       .filter((subElm) => {
    //         return elem.nativeElement.value === subElm.nativeElement.value;
    //       })
    //       .filter((subElm) => {
    //         return subElm.nativeElement.checked;
    //       })
    //       .map((subElm) => {
    //         return subElm.nativeElement.id;
    //       });
    // const derp2 = this.orderingOptions
    //   .filter((orderingOption) => {
    //     return orderingOption.value === elem.nativeElement.value;
    //   })
    //   .flatMap((orderingOption) => {
    //     return orderingOption.specialRequests;
    //   });
    // properties[elem.nativeElement.value] = [...derp, ...derp2];
    //   properties[elem.nativeElement.value] = derp;
    // }
    // });

    console.log(this.waterFG.controls.mainCheckbox.value);
    this.waterFG.controls.orderingOptions.controls.staticOptions.controls.forEach((control) => {
      console.log(control.value.name);
      console.log(control.value.value);
    });

    const orderingRequest: OrderingRequest = { message: 'Wifey needy', type: PrintType.RECEIPT.toString(), properties };

    // this.orderingService.placeOrder(orderingRequest).subscribe(() => {
    //   this.toastService.showToastMessage('Order submitted', 4000); // todo
    //   this.zone.run(() => this.router.navigate([`/portal`]));
    // });
  }
}
