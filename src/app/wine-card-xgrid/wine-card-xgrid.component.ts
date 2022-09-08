import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { WineDisplay } from '../models/WineDisplay';
import { WineRatingResponse } from '../models/WineRatingResponse';

@Component({
  selector: 'app-wine-card-xlist-xgrid',
  templateUrl: './wine-card-xgrid.component.html',
  styleUrls: ['./wine-card-xgrid.component.scss']
})
export class WineCardXGridComponent implements OnInit, AfterViewInit {
  @Input() wineDisplay: WineDisplay;
  @Input() wineRatings: Array<WineRatingResponse>;

  @ViewChildren('infosvg') infoRef: ElementRef[];

  yourRatings = 0;
  totalRatings = 0;

  constructor() {}

  ngOnInit(): void {
    this.getYourRatings(this.wineDisplay);
    this.getTotalRatings(this.wineDisplay);
  }

  ngAfterViewInit(): void {
    this.infoRef.forEach((e) => {
      e.nativeElement.addEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
    });
  }

  getYourRatings(wine: WineDisplay): void {
    const wineId = wine.id;
    const user = sessionStorage.getItem('username');

    let count = 0;

    this.wineRatings.forEach((value) => {
      if (value.wineId === wineId && value.user === user) {
        count++;
      }
    });

    this.yourRatings = count;
  }

  getTotalRatings(wine: WineDisplay): void {
    const wineId = wine.id;

    let count = 0;

    this.wineRatings.forEach((value) => {
      if (value.wineId === wineId) {
        count++;
      }
    });

    this.totalRatings = count;
  }

  displayTooltip(): string {
    let tooltip = '';
    this.wineRatings.forEach((value) => {
      if (value.wineId === this.wineDisplay.id && value.user !== sessionStorage.getItem('username')) {
        tooltip += `${value.user}: ${value.rating === '-1' ? '💩' : value.rating}\n`;
      }
    });
    return tooltip;
  }
}
