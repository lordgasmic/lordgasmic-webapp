import { Component, OnInit } from '@angular/core';
import { OrderingService } from '../../services/ordering/ordering.service';
import { OrderResponse } from '@models/lordgasmic-ordering/OrderResponse';

@Component({
  selector: 'app-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  history: OrderResponse[];

  constructor(private orderService: OrderingService) {}

  ngOnInit(): void {
    this.orderService.getOrderingHistory().subscribe((result) => {
      if (result) {
        this.history = result.sort((a, b) => b.date.getTime() - a.date.getTime());
      }
    });
  }
}
