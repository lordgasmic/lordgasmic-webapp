import { Component, OnInit } from '@angular/core';
import { FeedResponse } from '../models/FeedResponse';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-feeding-history',
  templateUrl: './feeding-history.component.html',
  styleUrls: ['./feeding-history.component.scss'],
})
export class FeedingHistoryComponent implements OnInit {
  source: FeedResponse[] = [];

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.lordgasmicService.getFeeds().subscribe((feedResonse) => {
      this.source = feedResonse;
    });
  }
}
