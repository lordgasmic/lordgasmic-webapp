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
    private toastService: ToastMessageService
  ) {}

  ngOnInit(): void {}

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
