import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { WineService } from '../services/wine/wine.service';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { WineryResponse } from '../models/WineryResponse';
import { DialogWineAddComponent } from '../dialog-wine-add/dialog-wine-add.component';
import { RoleConstants } from '../configuration/RoleConstants';
import { WineDisplay } from '../models/WineDisplay';
import { WineRatingResponse } from '../models/WineRatingResponse';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss']
})
export class WineryComponent implements OnInit {
  winery$: Observable<WineryResponse>;
  wineResponses: Array<WineDisplay> = [];
  users$: Observable<Array<string>>;
  wineRatings: Array<WineRatingResponse> = [];
  wines$: Observable<Array<any>>;

  winesTasted: Array<WineDisplay> = [];
  winesUntasted: Array<WineDisplay> = [];

  usersFormControl = new UntypedFormControl();

  currentUser = sessionStorage.getItem('username');
  displayType: 'list' | 'grid' = 'list';
  hidden = true;
  isLoading = false;
  id: number;
  isList = true;

  constructor(
    private lordgasmicService: LordgasmicService,
    private wineService: WineService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      this.winery$ = this.wineService.getWinery(this.id);
      this.wines$ = this.wineService.getWinesByWinery(this.id).pipe(
        mergeMap(
          (wines: Array<WineDisplay>) => {
            const wineIds = wines.map((wine) => wine.id);
            return this.wineService.getWineRatingsByUsersForWineIds(['*'], wineIds);
          },
          (wines, ratings) => {
            return wines.map((wine) => {
              const wineRating = ratings.filter((rating) => rating.wineId === wine.id);
              const myRating = wineRating.find((rating) => rating.user === this.currentUser);
              return { ...wine, ratings: wineRating, myRating };
            });
          }
        )
      );
    });

    this.users$ = this.lordgasmicService
      .getUsersByRole(RoleConstants.wine)
      .pipe(map((users) => users.filter((user) => user !== this.currentUser)));
  }

  updateDisplay(change) {
    this.displayType = change.value;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWineAddComponent, { data: { wineryId: this.id } });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.wineResponses.push(result);
        // this.sortTastedUntastedWines();
      }
    });
  }

  onOpenedChanged(event: boolean): void {
    if (!event) {
      // closes the dropdown
      const users: string[] = this.usersFormControl.value;
      if (users == null || users.length === 0) {
        this.wineResponses.forEach((wr) => {
          wr.wineFriend = new Set<string>();
        });
        return;
      }

      this.isLoading = true;
      this.wineRatings
        .filter((wrr) => {
          return users.includes(wrr.user);
        })
        .forEach((wrr) => {
          this.wineResponses.forEach((wr) => {
            if (wr.id === wrr.wineId) {
              if (wr.wineFriend === undefined) {
                wr.wineFriend = new Set<string>();
              }
              wr.wineFriend.add(wrr.user);
            }
          });
        });
    }
    this.isLoading = false;
  }

  toggleListGridView(): void {
    this.isList = !this.isList;
  }

  getListGridViewClassName(): string {
    return this.isList ? 'list' : 'grid';
  }

  getCardsContainerClassName(): string {
    return this.isList ? 'cards-container-list' : 'cards-container-grid';
  }
}
