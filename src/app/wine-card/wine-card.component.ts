import { Component, Input, OnInit } from '@angular/core';
import { WineDisplay } from '../models/WineDisplay';
import { WineRatingResponse } from '../models/WineRatingResponse';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss']
})
export class WineCardComponent implements OnInit {
  @Input() wineDisplay: WineDisplay;
  @Input() wineRatings: Array<WineRatingResponse>;

  constructor() {}

  ngOnInit(): void {}

  getYourRatings(wine: WineDisplay): number {
    const wineId = wine.id;
    const user = sessionStorage.getItem('username');

    let count = 0;

    this.wineRatings.forEach((value) => {
      if (value.wineId === wineId && value.user === user) {
        count++;
      }
    });

    return count;
  }

  getTotalRatings(wine: WineDisplay): number {
    const wineId = wine.id;

    let count = 0;

    this.wineRatings.forEach((value) => {
      if (value.wineId === wineId) {
        count++;
      }
    });

    return count;
  }
}
