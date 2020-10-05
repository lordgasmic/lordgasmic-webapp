import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FeedingHistoryParent } from '../models/FeedingHistoryParent';

@Component({
  selector: 'app-feeding-history-type',
  templateUrl: './feeding-history-type.component.html',
  styleUrls: ['./feeding-history-type.component.scss'],
})
export class FeedingHistoryTypeComponent
  extends FeedingHistoryParent
  implements OnChanges {
  @Input() source;

  title = 'Feeding by milk type';
  columnNames = ['Date', 'hmf', 'no hmf', 'bm+f', '22c', 'bm', 'bm+f+22c'];
  options = {
    hAxis: {
      title: 'Date',
    },
    vAxis: {
      minValue: 0,
    },
    isStacked: true,
  };

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
      let types: Map<string, number> = new Map<string, number>();
      value.forEach((feed) => {
        feed.bottles.forEach((bottle) => {
          let q = 0;
          if (types.get(bottle.note)) {
            q = types.get(bottle.note);
            q += bottle.quantity;
          } else {
            q = bottle.quantity;
          }
          types.set(bottle.note, q);
        });
      });

      if (types.has('hmf')) {
        arr.push(types.get('hmf'));
      } else {
        arr.push(0);
      }
      if (types.has('no hmf')) {
        arr.push(types.get('no hmf'));
      } else {
        arr.push(0);
      }
      if (types.has('bm+f')) {
        arr.push(types.get('bm+f'));
      } else {
        arr.push(0);
      }
      if (types.has('22c')) {
        arr.push(types.get('22c'));
      } else {
        arr.push(0);
      }
      if (types.has('bm')) {
        arr.push(types.get('bm'));
      } else {
        arr.push(0);
      }
      if (types.has('bm+f+22c')) {
        arr.push(types.get('bm+f+22c'));
      } else {
        arr.push(0);
      }

      this.data.push(arr);
    });
  }
}
