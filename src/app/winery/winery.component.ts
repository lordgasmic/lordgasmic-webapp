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
      console.log(params.keys);
      console.log(params.keys.length);
      if (params.keys.length === 0) {
        console.log('keys zero');
        this.zone.run(() => this.router.navigate([`/wineTasting`], {}));
      } else {
        console.log('found keys');
        const id = params.get('id');
        console.log('id: ' + id);
        this.lordgasmicService.getWinery(id).subscribe((value) => {
          this.wineryResponse = value;
          console.log(this.wineryResponse);
        });
      }
    });
  }
}
