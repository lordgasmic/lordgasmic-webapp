import { Component, OnInit } from '@angular/core';
import { FunkosResponse } from '@models/funkos/FunkosResponse';
import { FunkoService } from '../../services/funko/funko.service';

@Component({
  selector: 'app-main',
  templateUrl: './funko-main.component.html',
  styleUrls: ['./funko-main.component.scss']
})
export class FunkoMainComponent implements OnInit {
  funkosResponse: FunkosResponse;

  constructor(private funkoService: FunkoService) {}

  ngOnInit(): void {
    this.funkoService.getFunkos().subscribe((data) => {
      if (data) {
        this.funkosResponse = data;
      }
    });
  }
}
