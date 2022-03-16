import { Component, Input, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';

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

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.lordgasmicService.getWinery(this.wineryId).subscribe((response) => {
      this.wineryName = response.name;
    });
    this.lordgasmicService.getWineById(this.wineId).subscribe((response) => {
      this.wineName = response.name;
    });
  }

  goBack(): void {
    history.back();
  }
}
