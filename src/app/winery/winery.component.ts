import { Component, NgZone, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WineryResponse } from '../models/WineryResponse';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss']
})
export class WineryComponent implements OnInit {
  wineryResponse: WineryResponse;

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params.keys.length === 0) {
        this.zone.run(() => this.router.navigate([`/wineTasting`], {}));
      } else {
        const id = params.get('id');
        this.lordgasmicService.getWinery(id).subscribe((value) => {
          this.wineryResponse = value;
        });
      }
    });
  }
}
