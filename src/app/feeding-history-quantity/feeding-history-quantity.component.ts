import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feeding-history-quantity',
  templateUrl: './feeding-history-quantity.component.html',
  styleUrls: ['./feeding-history-quantity.component.scss']
})
export class FeedingHistoryQuantityComponent implements OnChanges {

  @Input() source;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['source']) {
      this.generateChart();
    }
  }
  
  generateChart() {
    
  }

}
