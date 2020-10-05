import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FeedingHistoryParent } from '../models/FeedingHistoryParent';

@Component({
  selector: 'app-feeding-history-bottles',
  templateUrl: './feeding-history-bottles.component.html',
  styleUrls: ['./feeding-history-bottles.component.scss'],
})
export class FeedingHistoryBottlesComponent
  extends FeedingHistoryParent
  implements OnChanges {
  @Input() source;

  title = 'Feeding by bottles per day';
  columnNames = ['Date', 'bottles'];

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
          quantity++;
        });
      });
      arr.push(quantity);

      this.data.push(arr);
    });
  }
}
