import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { GasResponse } from '../models/GasResponse';
import { ActivatedRoute } from '@angular/router';
import { GasSeries, GasVehicle } from '../models/GasMPG';

@Component({
  selector: 'app-gas-stats',
  templateUrl: './gas-stats.component.html',
  styleUrls: ['./gas-stats.component.scss']
})
export class GasStatsComponent implements OnInit {
  data: Array<GasResponse> = [];
  mpgData: Array<GasVehicle> = [];

  vehicle = false;

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });

    this.lordgasmicService.getGas('Charger').subscribe((res) => {
      this.data = res;
      this.vehicle = true;
      this.calculateMPG();
    });
  }

  calculateMPG(): void {
    const series: Array<GasSeries> = [];
    for (let i = 1; i < this.data.length; i++) {
      const gal = Number(this.data[i].gas);
      const odo = Number(this.data[i].odometer) - Number(this.data[i - 1].odometer);
      const date = this.data[i].date;

      const mpg = odo / gal + '';

      series.push({ name: date, value: mpg });
    }
    this.mpgData.push({ name: 'Charger', series });
  }
}
