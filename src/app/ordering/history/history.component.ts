import { Component, OnInit } from '@angular/core';
import { OrderingService } from '../../services/ordering/ordering.service';
import { OrderResponse } from '@models/lordgasmic-ordering/OrderResponse';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
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
