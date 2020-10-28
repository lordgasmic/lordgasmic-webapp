import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from './services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lordgasmic-app';

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.loadSessionInfo();
  }

  private loadSessionInfo(): void {
    this.lordgasmicService.getSessionInfo().subscribe(session => {
      //
    });
  }
}
