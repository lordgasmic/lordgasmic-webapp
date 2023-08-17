import { Component, NgZone, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { Router } from '@angular/router';
import { WebappConstants } from '../configuration/WebappConstants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private lordgasmicService: LordgasmicService, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {}

  logout(event): void {
    event.preventDefault();
    this.lordgasmicService.logout().subscribe((value) => {
      localStorage.removeItem(WebappConstants.LORDGASMIC_AUTH_TOKEN);
      this.zone.run(() => this.router.navigate(['/']));
    });
  }
}
