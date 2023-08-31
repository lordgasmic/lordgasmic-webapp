import { Component, Input, OnInit } from '@angular/core';
import { WineService } from '../services/wine/wine.service';

@Component({
  selector: 'app-wine-header',
  templateUrl: './wine-header.component.html',
  styleUrls: ['./wine-header.component.scss']
})
export class WineHeaderComponent implements OnInit {
  @Input() isTopLevel: boolean;
  @Input() wineryId: number;
  @Input() wineId: number;

  wineryName: string;
  wineName: string;

  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    if (this.wineryId) {
      this.wineService.getWinery(this.wineryId).subscribe((response) => {
        this.wineryName = response.name;
      });
    }

    if (this.wineId) {
      this.wineService.getWineById(this.wineId).subscribe((response) => {
        this.wineName = response.name;
      });
    }
  }

  goBack(): void {
    history.back();
  }
}
