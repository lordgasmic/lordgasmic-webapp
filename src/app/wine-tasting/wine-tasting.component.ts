import { Component, NgZone, OnInit } from '@angular/core';
import { WineryResponse } from '../models/WineryResponse';
import { WineService } from '../services/wine/wine.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogWineryAddComponent } from '../dialog-winery-add/dialog-winery-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wine-tasting',
  templateUrl: './wine-tasting.component.html',
  styleUrls: ['./wine-tasting.component.scss']
})
export class WineTastingComponent implements OnInit {
  wineryResponse: Array<WineryResponse> = [];
  hidden = true;

  constructor(
    private wineService: WineService, 
    private dialog: MatDialog, 
    private router: Router, 
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.wineService.getWineries().subscribe((value) => {
      this.wineryResponse = value;
      this.hidden = false;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWineryAddComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.wineryResponse.push(result);
      }
    });
  }
}
