import { Component, Input, OnInit } from '@angular/core';
import { OrderResponse } from '@models/lordgasmic-ordering/OrderResponse';

@Component({
  selector: 'app-order-history-row',
  templateUrl: './order-history-row.component.html',
  styleUrls: ['./order-history-row.component.scss']
})
export class OrderHistoryRowComponent implements OnInit {
  @Input()
  orderRow: OrderResponse;

  constructor() {}

  ngOnInit(): void {}

  buildItems(): string {
    console.log(this.orderRow);
    return 'derp';
  }
}
