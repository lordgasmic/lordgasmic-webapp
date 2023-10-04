import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { WineryResponse } from '@models/WineryResponse';
import { WineResponse } from '@models/WineResponse';
import { WineService } from '../../services/wine/wine.service';

@Component({
  selector: 'app-wine-header',
  templateUrl: './wine-header.component.html',
  styleUrls: ['./wine-header.component.scss']
})
export class WineHeaderComponent implements OnInit {
  isTopLevel: boolean;

  winery = new BehaviorSubject<WineryResponse | null>(null);
  wine = new BehaviorSubject<WineResponse | null>(null);

  constructor(
    private router: Router,
    private wineService: WineService
  ) {}

  get title() {
    if (this.wine.value) return this.wine.value.name;
    if (this.winery.value) return this.winery.value.name;
    return 'Wine Tasting App';
  }

  ngOnInit(): void {
    let segments = this.router.routerState.snapshot.url.split('/');
    this.fetchNames(segments);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url.split('/')),
      tap(segments => this.isTopLevel = segments[3] === undefined)
    ).subscribe(segments => this.fetchNames(segments));
  }

  fetchNames(urlSegments: Array<string>): void {
    const wineryId = parseInt(urlSegments[3]);
    const wineId = parseInt(urlSegments[5]);

    if (wineId) {
      this.wineService.getWineById(wineId).subscribe(wine => this.wine.next(wine));
    } else {
      this.wine.next(null);
    }

    if (wineryId) {
      this.wineService.getWinery(wineryId).subscribe(winery => this.winery.next(winery));
    } else {
      this.winery.next(null);
    }
  }

  goBack(): void {
    history.back();
  }
}
