import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gas-stats',
  templateUrl: './gas-stats.component.html',
  styleUrls: ['./gas-stats.component.scss']
})
export class GasStatsComponent implements OnInit {
  dummyData = [
    { name: 'derp', value: 20 },
    { name: 'plop', value: 12 },
    { name: 'blah', value: 55 },
    {
      name: 'nerp',
      value: 34
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
