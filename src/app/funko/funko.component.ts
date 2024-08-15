import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { FunkoResponse } from '@models/FunkoResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-funko',
  templateUrl: './funko.component.html',
  styleUrls: ['./funko.component.scss']
})
export class FunkoComponent implements OnInit {

  funkoResponse$: Observable<FunkoResponse>;

  constructor(private lordgasmicService: LordgasmicService) {
  }

  ngOnInit(): void {
    this.funkoResponse$ = this.lordgasmicService.getFunkos();
  }

}
