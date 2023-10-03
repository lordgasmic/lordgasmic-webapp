import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { RoleConstants } from '../configuration/RoleConstants';
import { WineService } from '../services/wine/wine.service';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-wine-tasting',
  templateUrl: './wine-tasting.component.html',
  styleUrls: ['./wine-tasting.component.scss']
})
export class WineTastingComponent implements OnInit {

  userRatingsAverage$;

  constructor(
    private wineService: WineService,
    private userServie: LordgasmicService
  ) {}

  ngOnInit() {
    this.userRatingsAverage$ = this.userServie.getUsersByRole(RoleConstants.wine).pipe(
      mergeMap(users => {
        return forkJoin(
          users.map(user => this.wineService.getWineRatingsByUser(user))
        )
      }),
      map(userRatings => {
        const userRatingAverage = [];
        userRatings.forEach(ratings => {
          if (ratings.length) {
            const total = ratings.reduce((total, rating) => { return total + parseInt(rating.rating) }, 0);
            const avg = total / ratings.length;
            userRatingAverage.push({ user: ratings[0].user, average: avg });
          }
        });

        return userRatingAverage.sort((a, b) => a.average - b.average);
      }
    ));
  }
}
