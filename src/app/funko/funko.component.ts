import { Component, OnInit } from '@angular/core';
import { FunkoService } from '../services/funko/funko.service';
import { FunkosResponse } from '@models/funkos/FunkosResponse';

@Component({
  selector: 'app-funko',
  templateUrl: './funko.component.html',
  styleUrls: ['./funko.component.scss']
})
export class FunkoComponent implements OnInit {
  funkos: FunkosResponse;

  constructor(private funkoService: FunkoService) {}

  ngOnInit(): void {
    this.funkoService.getFunkos().subscribe((data) => {
      if (data) {
        this.funkos = data;
      }
    });
  }
}
