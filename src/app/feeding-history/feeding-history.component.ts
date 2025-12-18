import { Component, OnInit } from '@angular/core';
import { FeedResponse } from '@models/feeding/FeedResponse';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-feeding-history',
  templateUrl: './feeding-history.component.html',
  styleUrls: ['./feeding-history.component.scss']
})
export class FeedingHistoryComponent implements OnInit {
  source: Map<string, FeedResponse[]>;

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.lordgasmicService.getFeeds().subscribe((feedResonse) => {
      let feeds = new Map<string, FeedResponse[]>();
      feedResonse.forEach((feed) => {
        let res: FeedResponse[];
        if (feeds.has(feed.date)) {
          res = feeds.get(feed.date);
        } else {
          res = [];
        }

        res.push(feed);

        feeds.set(feed.date, res);
      });

      this.source = feeds;
    });
  }
}
