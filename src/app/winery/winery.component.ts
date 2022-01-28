import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ActivatedRoute } from '@angular/router';
import { WineryResponse } from '../models/WineryResponse';
import { WineResponse } from '../models/WineResponse';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss']
})
export class WineryComponent implements OnInit {
  wineryResponse: WineryResponse;
  wineResponse: Array<WineResponse> = [];

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.lordgasmicService.getWinery(id).subscribe((value) => {
        this.wineryResponse = value;
        this.lordgasmicService.getWinesByWinery(id).subscribe((res) => {
          this.wineResponse = res;
        });
      });
    });
  }
}
