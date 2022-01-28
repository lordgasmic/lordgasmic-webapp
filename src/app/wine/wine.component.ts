import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { WineResponse } from '../models/WineResponse';
import { WineNoteResponse } from '../models/WineNoteResponse';
import { WineRatingResponse } from '../models/WineRatingResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent implements OnInit {
  wineResponse: WineResponse;
  wineNoteResponse: Array<WineNoteResponse> = [];
  wineRatingResponse: WineRatingResponse;

  isWineAvailable = false;
  isWineNoteAvailable = false;
  isWineRatingAvailable = false;

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.lordgasmicService.getWineById(id).subscribe((res) => {
        this.wineResponse = res;
        this.isWineAvailable = true;
        this.lordgasmicService.getWineNotesByWineId(id).subscribe((wnr) => {
          this.wineNoteResponse = wnr;
          this.isWineNoteAvailable = true;
        });
        this.lordgasmicService.getWineRatingByWineId(id).subscribe((wrr) => {
          this.wineRatingResponse = wrr;
          this.isWineRatingAvailable = true;
        });
      });
    });
  }
}
