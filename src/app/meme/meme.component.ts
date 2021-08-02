import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { MemeResponse } from '../models/MemeResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureType } from '../models/PictureType';
import { VideoType } from '../models/VideoType';
import { ToastMessageService } from '../services/toast-message/toast-message.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  @ViewChild('search') search: ElementRef;

  memeResponse: Array<MemeResponse> = [];

  hidden: boolean;

  constructor(
    private lordgasmicService: LordgasmicService,
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private toastService: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      if (params.keys.length === 0) {
        this.hidden = true;
      } else {
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

  copyToClipboard(url: string): void {
    const selBox = document.createElement('textarea');
    selBox.classList.add('clipboard');
    selBox.value = `${location.hostname}${url}`;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.toastService.showToastMessage('Copied to clipboard', 6000000);
  }

  share(url: string): void {
    if (navigator.share) {
      navigator
        .share({
          title: 'derp',
          text: 'you are a derp',
          url
        })
        .then(() => console.log('successful share'))
        .catch((error) => console.log('error sharing', error));
    }
  }

  isPicture(meme: MemeResponse): boolean {
    return Object.values(PictureType).includes(this.getUrlExtension(meme.url));
  }

  idVideo(meme: MemeResponse): boolean {
    return Object.values(VideoType).includes(this.getUrlExtension(meme.url));
  }

  getUrlExtension(url: string): string {
    return url.substr(url.lastIndexOf('.') + 1);
  }
}
