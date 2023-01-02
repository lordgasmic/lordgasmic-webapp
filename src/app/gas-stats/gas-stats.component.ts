import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { GasResponse } from '../models/GasResponse';
import { ActivatedRoute } from '@angular/router';
import { GasMPG } from '../models/GasMPG';

@Component({
  selector: 'app-gas-stats',
  templateUrl: './gas-stats.component.html',
  styleUrls: ['./gas-stats.component.scss']
})
export class GasStatsComponent implements OnInit {
  dummyData = [
    { name: 'derp', value: 20 },
    { name: 'plop', value: 12 },
    { name: 'blah', value: 55 },
    {
      name: 'nerp',
      value: 34
    }
  ];

  data: Array<GasResponse> = [];
  mpgData: Array<GasMPG> = [];

  vehicle = false;

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });

    this.lordgasmicService.getGas('Charger').subscribe((res) => {
      this.data = res;
      this.calculateMPG();
    });
  }

  calculateMPG(): void {
    for (let i = 1; i < this.data.length; i++) {
      const gal = Number(this.data[i].gas);
      const odo = Number(this.data[i].odometer) - Number(this.data[i - 1].odometer);
      const date = this.data[i].date;

      const mpg = odo / gal + '';
      this.mpgData.push({ date, mpg });
    }
  }
}
