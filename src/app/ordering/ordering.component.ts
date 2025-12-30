import { Component, ElementRef, NgZone, OnInit, QueryList, ViewChildren } from '@angular/core';
import { OrderingService } from '../services/ordering/ordering.service';
import { OrderingRequest } from '@models/OrderingRequest';
import { PrintType } from '@models/PrintType';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { Router } from '@angular/router';
import { OrderingOptions } from '@models/OrderingOptions';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {
  @ViewChildren('menu')
  children!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('subMenu')
  modifiers!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('miscOption')
  miscOption!: QueryList<ElementRef<HTMLInputElement>>;

  orderingOptions: OrderingOptions[] = [
    { name: 'Water', value: 'WATER', options: ['Ice', 'Stanley'], specialRequests: [] },
    { name: 'Salty Snacks', value: 'SALTY_SNACKS', options: ['Chips', 'Nuts'], specialRequests: [] },
    { name: 'Sweet Snacks', value: 'SWEET_SNACKS', options: ['Candy', 'Cereal'], specialRequests: [] },
    { name: 'Wine', value: 'WINE', options: [], specialRequests: [] },
    { name: 'Other', value: 'OTHER', options: [], specialRequests: [] }
  ];

  constructor(
    private orderingService: OrderingService,
    private router: Router,
    private zone: NgZone,
    private toastService: ToastMessageService
  ) {}

  ngOnInit(): void {
    for (let i = 0; i < this.orderingOptions.length; i++) {
      this.addMiscOptionsRow(i);
    }
  }

  handleCheckboxDisabled(): void {
    // get row
    // check if checked
    // set checked on subs
  }

  addMiscOptionsRow(index: number): void {
    this.orderingOptions[index].specialRequests.push('');
  }

  updateSpecialRequests($event: string, i: number, ii: number): void {
    this.orderingOptions[i].specialRequests[ii] = $event;
  }

  submit(): void {
    const properties: { [key: string]: string[] } = {};

    this.children.forEach((elem) => {
      if (elem.nativeElement.checked) {
        const derp = this.modifiers
          .filter((subElm) => {
            return elem.nativeElement.value === subElm.nativeElement.value;
          })
          .filter((subElm) => {
            return subElm.nativeElement.checked;
          })
          .map((subElm) => {
            return subElm.nativeElement.id;
          });
        const derp2 = this.orderingOptions
          .filter((orderingOption) => {
            return orderingOption.value === elem.nativeElement.value;
          })
          .map((orderingOption) => {
            return orderingOption.specialRequests;
          });
        console.log(derp2);
        properties[elem.nativeElement.value] = derp;
      }
    });

    const orderingRequest: OrderingRequest = { message: 'Wifey needy', type: PrintType.RECEIPT.toString(), properties };

    this.orderingService.placeOrder(orderingRequest).subscribe(() => {
      this.toastService.showToastMessage('Order submitted', 4000); // todo
      this.zone.run(() => this.router.navigate([`/portal`]));
    });
  }
}
