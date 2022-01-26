import { Component, OnInit } from '@angular/core';
import { WineryResponse } from '../models/WineryResponse';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-wine-tasting',
  templateUrl: './wine-tasting.component.html',
  styleUrls: ['./wine-tasting.component.scss']
})
export class WineTastingComponent implements OnInit {
  wineryResponse: Array<WineryResponse> = [];
  hidden = true;
  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.lordgasmicService.getWineries().subscribe((value) => {
      this.wineryResponse = value;
      this.hidden = false;
    });
  }
}
