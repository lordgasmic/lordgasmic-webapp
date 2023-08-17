import { Component, NgZone, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private lordgasmicService: LordgasmicService, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {}

  logout(): void {
    this.lordgasmicService.logout().subscribe((value) => {
      this.zone.run(() => this.router.navigate(['/']));
    });
  }
}
