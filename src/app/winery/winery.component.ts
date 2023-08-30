import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine/wine.service';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ActivatedRoute } from '@angular/router';
import { WineryResponse } from '../models/WineryResponse';
import { DialogWineAddComponent } from '../dialog-wine-add/dialog-wine-add.component';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormControl } from '@angular/forms';
import { RoleConstants } from '../configuration/RoleConstants';
import { WineDisplay } from '../models/WineDisplay';
import { WineRatingResponse } from '../models/WineRatingResponse';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss']
})
export class WineryComponent implements OnInit {
  wineryResponse: WineryResponse;
  wineResponses: Array<WineDisplay> = [];
  usersResponse: Array<string> = [];
  wineRatings: Array<WineRatingResponse> = [];

  winesTasted: Array<WineDisplay> = [];
  winesUntasted: Array<WineDisplay> = [];

  usersFormControl = new UntypedFormControl();

  hidden = true;
  isLoading = false;
  isWineryResponseLoaded = false;
  isUsersResponseLoaded = false;
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
      this.wineService.getWinery(this.id).subscribe((value) => {
        this.wineryResponse = value;
        this.isWineryResponseLoaded = true;
        this.wineService.getWinesByWinery(this.id).subscribe((res) => {
          this.wineResponses = res;
          this.hidden = false;

          this.wineService
            .getWineRatingsByUsersForWineIds(
              ['*'],
              this.wineResponses.map((wr) => {
                return wr.id;
              })
            )
            .subscribe((response) => {
              this.wineRatings = response;
              this.sortTastedUntastedWines();
            });
        });
      });
    });
    this.lordgasmicService.getUsersByRole(RoleConstants.wine).subscribe((res) => {
      this.usersResponse = res.filter((obj) => {
        return obj !== sessionStorage.getItem('username');
      });
      this.isUsersResponseLoaded = true;
    });
  }

  sortTastedUntastedWines(): void {
    // empty the arrays
    this.winesTasted = [];
    this.winesUntasted = [];

    // get current users wine ratings for sorting
    const currentUsersWineRatings = this.wineRatings.filter((wrr) => {
      return wrr.user === sessionStorage.getItem('username');
    });

    // sort into tasted and un
    const wineIds: number[] = currentUsersWineRatings.map((v) => {
      return v.wineId;
    });
    this.wineResponses.forEach((wd) => {
      if (wineIds.includes(wd.id)) {
        this.winesTasted.push(wd);
      } else {
        this.winesUntasted.push(wd);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWineAddComponent, { data: { wineryId: this.id } });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.wineResponses.push(result);
        this.sortTastedUntastedWines();
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
