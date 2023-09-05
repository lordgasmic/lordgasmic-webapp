import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren, ViewEncapsulation } from '@angular/core';
import { WineDisplay } from '../models/WineDisplay';
import { WineRatingResponse } from '../models/WineRatingResponse';

@Component({
  selector: 'app-wine-card-xlist',
  templateUrl: './wine-card-xlist.component.html',
  styleUrls: ['./wine-card-xlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WineCardXListComponent implements OnInit {
  @Input() wine;
  averageRating = 0;

  yourRatings = 0;
  totalRatings = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.wine.ratings.length) {
      const total = this.wine.ratings.reduce((total, rating) => { return total + parseInt(rating.rating) }, 0);
      this.averageRating = total / this.wine.ratings.length;
    }
  }

  getYourRatings(wine: WineDisplay): void {
    const wineId = wine.id;
    const user = sessionStorage.getItem('username');

    let count = 0;

    this.wine.ratings.forEach((value) => {
      if (value.wineId === wineId && value.user === user) {
        count++;
      }
    });

    this.yourRatings = count;
  }

  getTotalRatings(wine: WineDisplay): void {
    const wineId = wine.id;

    let count = 0;

    this.wine.ratings.forEach((value) => {
      if (value.wineId === wineId) {
        count++;
      }
    });

    this.totalRatings = count;
  }

  displayTooltip(): string {
    let tooltip = '';
    this.wine.ratings.forEach((value) => {
      if (value.wineId === this.wine.id && value.user !== sessionStorage.getItem('username')) {
        tooltip += `${value.user}: ${value.rating === '-1' ? '💩' : value.rating}\n`;
      }
    });
    return tooltip;
  }
}
