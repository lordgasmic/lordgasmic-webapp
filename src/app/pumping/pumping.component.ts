import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { Expression } from '../models/Expression';

@Component({
  selector: 'app-pumping',
  templateUrl: './pumping.component.html',
  styleUrls: ['./pumping.component.scss'],
})
export class PumpingComponent implements OnInit {
  private expressions: Expression[];

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.getExpressions();
  }

  getExpressions(): void {
    this.lordgasmicService.getExpressions();
  }
}
