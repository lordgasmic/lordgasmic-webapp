import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feeding-history-bottles',
  templateUrl: './feeding-history-bottles.component.html',
  styleUrls: ['./feeding-history-bottles.component.scss'],
})
export class FeedingHistoryBottlesComponent implements OnChanges {
  @Input() source;

  title = 'Feeding by bottles per day';
  type = 'ColumnChart';
  data = [];
  columnNames = ['Date', 'bottles'];
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
        feed.bottles.forEach((bottle) => {
          quantity++;
        });
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
