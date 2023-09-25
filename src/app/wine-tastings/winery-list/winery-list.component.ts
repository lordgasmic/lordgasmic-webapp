import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WineService } from '../../services/wine/wine.service';
import { DialogWineryAddComponent } from '../../dialog-winery-add/dialog-winery-add.component';

@Component({
  selector: 'app-winery-list',
  templateUrl: './winery-list.component.html',
  styleUrls: ['./winery-list.component.scss']
})
export class WineryListComponent implements OnInit {
  wineries = this.wineService.getWineries();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private wineService: WineService
  ) { }

  ngOnInit(): void {}

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
