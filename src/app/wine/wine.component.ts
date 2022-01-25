import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { WineryResponse } from '../models/WineryResponse';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent implements OnInit {
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
