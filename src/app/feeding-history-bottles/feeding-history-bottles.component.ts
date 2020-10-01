import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feeding-history-bottles',
  templateUrl: './feeding-history-bottles.component.html',
  styleUrls: ['./feeding-history-bottles.component.scss']
})
export class FeedingHistoryBottlesComponent implements OnChanges {

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
