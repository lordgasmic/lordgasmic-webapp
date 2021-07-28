import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { MemeResponse } from '../models/MemeResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  @ViewChild('search') search: ElementRef;

  memeResponse: Array<MemeResponse> = [];

  hidden: boolean;

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      if (params.keys.length === 0) {
        console.log('no length');
        this.hidden = true;
      } else {
        console.log(params.keys);
        const tag = params.get('tag');
        this.lordgasmicService.getMemes(tag).subscribe((value) => {
          this.memeResponse = value;
          this.hidden = false;
        });
      }
    });
  }

  submit($event: Event): void {
    $event.preventDefault();

    const tag = this.search.nativeElement.value;
    this.zone.run(() => this.router.navigate([`/memes`], { queryParams: { tag } }));
  }
}
