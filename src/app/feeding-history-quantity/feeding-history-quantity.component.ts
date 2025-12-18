import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FeedingHistoryParent } from '@models/feeding/FeedingHistoryParent';

@Component({
  selector: 'app-feeding-history-quantity',
  templateUrl: './feeding-history-quantity.component.html',
  styleUrls: ['./feeding-history-quantity.component.scss']
})
export class FeedingHistoryQuantityComponent extends FeedingHistoryParent implements OnChanges {
  @Input() source;

  title = 'Feeding by quantity per day';
  // columnNames = ['Date', 'ml', { role: 'annotation' }];
  columnNames = ['Date', 'ml'];

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['source'] && this.source) {
      this.buildChart();
    }
  }

  generateChart(): void {
    this.source.forEach((value, key) => {
      let arr = [];
      arr.push(key);
      let quantity = 0;
      value.forEach((feed) => {
        feed.bottles.forEach((bottle) => {
          quantity += bottle.quantity;
        });
      });
      arr.push(quantity);

      this.data.push(arr);
    });
  }
}
