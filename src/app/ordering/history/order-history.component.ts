import { Component, OnInit } from '@angular/core';
import { OrderingService } from '../../services/ordering/ordering.service';
import { OrderResponse } from '@models/lordgasmic-ordering/OrderResponse';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  history: OrderResponse[];

  constructor(private orderService: OrderingService, private location: Location) {}

  ngOnInit(): void {
    this.orderService.getOrderingHistory().subscribe((result) => {
      if (result) {
        this.history = result.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());
      }
    });
  }

  buildItems(): string {
    return 'derp';
  }

  backButton(): void {
    this.location.back();
  }
}
