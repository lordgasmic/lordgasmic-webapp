import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feeding-history-feeds',
  templateUrl: './feeding-history-feeds.component.html',
  styleUrls: ['./feeding-history-feeds.component.scss']
})
export class FeedingHistoryFeedsComponent implements OnChanges {

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
