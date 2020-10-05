import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feeding-history-quantity',
  templateUrl: './feeding-history-quantity.component.html',
  styleUrls: ['./feeding-history-quantity.component.scss'],
})
export class FeedingHistoryQuantityComponent implements OnChanges {
  @Input() source;

  title = 'Feeding by quantity per day';
  type = 'ColumnChart';
  data = [];
  columnNames = ['Date', 'ml', { role: 'annotation' }];
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

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['source'] && this.source) {
      this.generateChart();
    }
  }

  generateChart() {
    this.source.forEach((value, key) => {
      var arr = [];
      arr.push(key);
      var quantity = 0;
      value.forEach((feed) => {
        feed.bottles.forEach((bottle) => {
          quantity += bottle.quantity;
        });
      });
      arr.push(quantity);
      arr.push(`${quantity}`);

      this.data.push(arr);
    });

    this.data.sort(function (a, b) {
      var aComps = a[0].split('/');
      var bComps = b[0].split('/');
      var aDate = new Date(aComps[2], aComps[0] - 1, aComps[1]);
      var bDate = new Date(bComps[2], bComps[0] - 1, bComps[1]);
      return aDate.getTime() - bDate.getTime();
    });
  }
}
