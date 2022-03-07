import { Component, NgZone, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WineryResponse } from '../models/WineryResponse';
import { WineResponse } from '../models/WineResponse';
import { DialogWineryAddComponent } from '../dialog-winery-add/dialog-winery-add.component';
import { DialogWineAddComponent } from '../dialog-wine-add/dialog-wine-add.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss']
})
export class WineryComponent implements OnInit {
  wineryResponse: WineryResponse;
  wineResponse: Array<WineResponse> = [];

  hidden = true;
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
        this.lordgasmicService.getWinesByWinery(this.id).subscribe((res) => {
          this.wineResponse = res;
          this.hidden = false;
        });
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWineAddComponent, { data: { wineryId: this.id } });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.zone.runOutsideAngular(() => (window.location.href = `/winery/${this.id}`));
      }
    });
  }
}
