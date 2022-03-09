import { Component, NgZone, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WineryResponse } from '../models/WineryResponse';
import { WineResponse } from '../models/WineResponse';
import { DialogWineAddComponent } from '../dialog-wine-add/dialog-wine-add.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { RoleConstants } from '../configuration/RoleConstants';
import { MatSelectChange } from '@angular/material/select';
import { WineDisplay } from '../models/WineDisplay';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss']
})
export class WineryComponent implements OnInit {
  wineryResponse: WineryResponse;
  wineResponses: Array<WineDisplay> = [];
  usersResponse: Array<string> = [];

  usersFormControl = new FormControl();

  hidden = true;
  isLoading = false;
  isWineryResponseLoaded = false;
  isUsersResponseLoaded = false;
  id: string;

  constructor(
    private lordgasmicService: LordgasmicService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.lordgasmicService.getWinery(this.id).subscribe((value) => {
        this.wineryResponse = value;
        this.isWineryResponseLoaded = true;
        this.lordgasmicService.getWinesByWinery(this.id).subscribe((res) => {
          this.wineResponses = res;
          this.hidden = false;
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
        this.zone.runOutsideAngular(() => (window.location.href = `/wineTasting/winery/${this.id}`));
      }
    });
  }

  onOpenedChanged($event: boolean): void {
    if (!$event) {
      this.isLoading = true;

      this.lordgasmicService
        .getWineRatingsByUsersForWineIds(
          this.usersFormControl.value,
          this.wineResponses.map((wr) => {
            return wr.id;
          })
        )
        .subscribe((response) => {
          console.log(response);
        });

      this.isLoading = false;
    }
  }
}
