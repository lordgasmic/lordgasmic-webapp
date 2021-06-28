import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { MemeResponse } from '../models/MemeResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {

  @ViewChild('search') search: ElementRef;

  memeResponse: Array<MemeResponse>;

  constructor(private lordgasmicService: LordgasmicService,private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    const tag = this.search.nativeElement.value;

    this.lordgasmicService.getMemes(tag).subscribe((value) => {
      this.memeResponse = value;
      console.log(value);
      this.reloadComponent();
    });
  }

  reloadComponent(): void {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
