import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { RoleConstants } from '../../configuration/RoleConstants';
import { WineService } from '../../services/wine/wine.service';
import { LordgasmicService } from '../../services/lordgasmic/lordgasmic.service';
import { DialogWineryAddComponent } from '../../dialog-winery-add/dialog-winery-add.component';

@Component({
  selector: 'app-winery-list',
  templateUrl: './winery-list.component.html',
  styleUrls: ['./winery-list.component.scss']
})
export class WineryListComponent implements OnInit {
  wineries = this.wineService.getWineries();
  userRatingsAverage$;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private wineService: WineService,
    private userService: LordgasmicService
  ) { }

  ngOnInit(): void {
    this.userRatingsAverage$ = this.userService.getUsersByRole(RoleConstants.wine).pipe(
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWineryAddComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.router.navigate(['wineTasting', 'winery', result.id]);
        // this.wineryResponse.push(result);
      }
    });
  }

}
