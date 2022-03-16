import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ActivatedRoute } from '@angular/router';
import { WineryResponse } from '../models/WineryResponse';
import { DialogWineAddComponent } from '../dialog-wine-add/dialog-wine-add.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
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

  usersFormControl = new FormControl();

  hidden = true;
  isLoading = false;
  isWineryResponseLoaded = false;
  isUsersResponseLoaded = false;
  id: number;

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.lordgasmicService.getWinery(this.id).subscribe((value) => {
        this.wineryResponse = value;
        this.isWineryResponseLoaded = true;
        this.lordgasmicService.getWinesByWinery(this.id).subscribe((res) => {
          this.wineResponses = res;
          this.hidden = false;

          this.lordgasmicService
            .getWineRatingsByUsersForWineIds(
              ['*'],
              this.wineResponses.map((wr) => {
                return wr.id;
              })
            )
            .subscribe((response) => {
              this.wineRatings = response;

              // get current users wine ratings for sorting
              const currentUsersWineRatings = response.filter((wrr) => {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWineAddComponent, { data: { wineryId: this.id } });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.wineResponses.push(result);
      }
    });
  }

  onOpenedChanged(event: boolean): void {
    if (!event) {
      // closes the drop down
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
}
