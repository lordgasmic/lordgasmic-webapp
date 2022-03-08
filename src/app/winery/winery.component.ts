import { Component, NgZone, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WineryResponse } from '../models/WineryResponse';
import { WineResponse } from '../models/WineResponse';
import { DialogWineAddComponent } from '../dialog-wine-add/dialog-wine-add.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { RoleConstants } from '../configuration/RoleConstants';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss']
})
export class WineryComponent implements OnInit {
  wineryResponse: WineryResponse;
  wineResponse: Array<WineResponse> = [];
  usersResponse: Array<string> = [];

  usersFormControl = new FormControl();

  hidden = true;
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
          this.wineResponse = res;
          this.hidden = false;
        });
      });
    });
    console.log('debug 1');
    this.lordgasmicService.getUsersByRole(RoleConstants.wine).subscribe((res) => {
      this.usersResponse = res;
      this.isUsersResponseLoaded = true;
    });
    console.log('debug 2');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWineAddComponent, { data: { wineryId: this.id } });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.zone.runOutsideAngular(() => (window.location.href = `/wineTasting/winery/${this.id}`));
      }
    });
  }
}
