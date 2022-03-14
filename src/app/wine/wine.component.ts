import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { WineResponse } from '../models/WineResponse';
import { WineNoteResponse } from '../models/WineNoteResponse';
import { WineRatingResponse } from '../models/WineRatingResponse';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogWineRatingAddComponent } from '../dialog-wine-rating-add/dialog-wine-rating-add.component';
import { DatePipe } from '@angular/common';
import { WineNoteRequest } from '../models/WineNoteRequest';
import { WineImageDisplay } from '../models/WineImageDisplay';
import { DialogWineImageAddComponent } from '../dialog-wine-image-add/dialog-wine-image-add.component';
import { WineImage } from '../models/WineImage';
import { WineImageResponse } from '../models/WineImageResponse';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss'],
  providers: [DatePipe]
})
export class WineComponent implements OnInit {
  constructor(
    private lordgasmicService: LordgasmicService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private zone: NgZone,
    private datePipe: DatePipe
  ) {
    const myDate = new Date();
    this.date = this.datePipe.transform(myDate, 'yyyy-MM-dd');
  }
  @ViewChild('wineNote') wineNoteRef: ElementRef;

  wineResponse: WineResponse;
  wineNoteResponse: WineNoteResponse;
  wineRatingResponse: Array<WineRatingResponse> = [];
  wineImages: Array<WineImageDisplay> = [];

  isWineAvailable = false;
  isWineNoteAvailable = false;
  isWineRatingAvailable = false;

  isWineRatingBtnEnabled = true;
  isEditingBtnEnabled = true;
  isEditingNotes = false;

  wineId: number;
  date: string;
  addWineNotes: string[] = [];

  private static instanceOfWineImageResponse(data: any): data is WineImageResponse {
    return 'wineImages' in data;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.wineId = params.id;
      this.lordgasmicService.getWineById(this.wineId).subscribe((res) => {
        this.wineResponse = res;
        this.isWineAvailable = true;
        this.lordgasmicService.getWineNotesByWineId(this.wineId).subscribe((wnr) => {
          this.wineNoteResponse = wnr;
          this.isWineNoteAvailable = true;
          if (this.wineNoteResponse.wineNotes.length > 0) {
            this.isEditingBtnEnabled = false;
          }
        });
        this.lordgasmicService.getWineRatingByWineId(this.wineId).subscribe((wrr) => {
          this.wineRatingResponse = wrr;
          this.isWineRatingAvailable = true;
          if (this.wineRatingResponse.length > 0) {
            this.isWineRatingBtnEnabled = false;
          }
        });
        this.lordgasmicService.getWineImages(this.wineId).subscribe((response) => {
          response.wineImages.forEach((wi) => {
            this.loadImage(wi);
          });
        });
      });
    });
  }

  addRating(): void {
    const dialogRef = this.dialog.open(DialogWineRatingAddComponent, {
      data: { wineId: this.wineId, date: this.date }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.zone.runOutsideAngular(() => (window.location.href = `/wineTasting/wine/${this.wineId}`));
      }
    });
  }

  editNotes(): void {
    this.toggleEditingNotes();
  }

  onCancel(): void {
    this.addWineNotes = [];
    this.toggleEditingNotes();
  }

  onSubmit(): void {
    const req = new WineNoteRequest();
    req.wineId = this.wineId;
    req.user = sessionStorage.getItem('username');
    req.date = this.date;

    this.addWineNotes.forEach((value) => {
      req.wineNotes.push(value);
    });

    this.lordgasmicService.addWineNotes(req).subscribe((response) => {
      this.wineNoteResponse.wineNotes.push(...response.wineNotes);
    });

    this.addWineNotes = [];
    this.toggleEditingNotes();
  }

  addNote(): void {
    const note = this.wineNoteRef.nativeElement.value;
    this.addWineNotes.push(note);
    this.wineNoteRef.nativeElement.value = '';
  }

  toggleEditingNotes(): void {
    this.isEditingNotes = !this.isEditingNotes;
  }

  addImage(): void {
    const dialogRef = this.dialog.open(DialogWineImageAddComponent, {
      data: { wineId: this.wineId, response: {} }
    });

    dialogRef.afterClosed().subscribe((result: WineImageResponse | boolean) => {
      if (result && WineComponent.instanceOfWineImageResponse(result)) {
        result.wineImages.forEach((wi) => {
          this.loadImage(wi);
        });
      }
    });
  }

  private loadImage(wineImage: WineImage): void {
    this.wineImages.push({ label: wineImage.label, image: `data:${wineImage.mimeType};base64,${wineImage.image}` });
  }
}
