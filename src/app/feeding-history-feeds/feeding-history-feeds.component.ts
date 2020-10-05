import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feeding-history-feeds',
  templateUrl: './feeding-history-feeds.component.html',
  styleUrls: ['./feeding-history-feeds.component.scss'],
})
export class FeedingHistoryFeedsComponent implements OnChanges {
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

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['source'] && this.source) {
      this.generateChart();
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

    this.data.sort(function (a, b) {
      var aComps = a[0].split('/');
      var bComps = b[0].split('/');
      var aDate = new Date(aComps[2], aComps[0] - 1, aComps[1]);
      var bDate = new Date(bComps[2], bComps[0] - 1, bComps[1]);
      return aDate.getTime() - bDate.getTime();
    });
  }
}
