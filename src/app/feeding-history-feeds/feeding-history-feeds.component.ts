import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FeedingHistoryParent} from "../models/FeedingHistoryParent";

@Component({
  selector: 'app-feeding-history-feeds',
  templateUrl: './feeding-history-feeds.component.html',
  styleUrls: ['./feeding-history-feeds.component.scss'],
})
export class FeedingHistoryFeedsComponent extends FeedingHistoryParent implements OnChanges {
  @Input() source;

  title = 'Feeding by feeds per day';
  type = 'ColumnChart';
  data = [];
  columnNames = ['Date', 'feeds'];
  options = {
    hAxis: {
      title: 'Date',
    },
    vAxis: {
      minValue: 0,
    },
    isStacked: false,
  };
  width = 550;
  height = 400;

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
      var arr = [];
      arr.push(key);
      var quantity = 0;
      value.forEach((feed) => {
        quantity++;
      });
      arr.push(quantity);

      this.data.push(arr);
    });
  }
}
