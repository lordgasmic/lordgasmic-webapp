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

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss'],
  providers: [DatePipe]
})
export class WineComponent implements OnInit {
  @ViewChild('wineNote') wineNoteRef: ElementRef;

  wineResponse: WineResponse;
  wineNoteResponse: Array<WineNoteResponse> = [];
  wineRatingResponse: WineRatingResponse;

  isWineAvailable = false;
  isWineNoteAvailable = false;
  isWineRatingAvailable = false;

  isWineRatingBtnEnabled = true;
  isEditingBtnEnabled = true;
  isEditingNotes = false;

  wineId: number;
  date: string;
  addWineNotes: string[] = [];

  constructor(
    private lordgasmicService: LordgasmicService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private zone: NgZone,
    private datePipe: DatePipe
  ) {
    const myDate = new Date();
    this.date = this.datePipe.transform(myDate, 'MM/dd/yyy');
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
          if (this.wineNoteResponse.length > 0) {
            this.isEditingBtnEnabled = false;
          }
        });
        this.lordgasmicService.getWineRatingByWineId(this.wineId).subscribe((wrr) => {
          this.wineRatingResponse = wrr;
          this.isWineRatingAvailable = true;
          if (this.wineRatingResponse.date) {
            this.isWineRatingBtnEnabled = false;
          }
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
    const wineNoteRequests = new Array<WineNoteRequest>();
    this.addWineNotes.forEach((value, index) => {
      const req = new WineNoteRequest();
      req.wineId = this.wineId;
      req.user = sessionStorage.getItem('username');
      req.note = value;
      req.ordinal = index;
      req.date = this.date;
      wineNoteRequests.push(req);
    });

    this.lordgasmicService.addWineNotes(wineNoteRequests).subscribe((response) => {
      this.wineNoteResponse = response;
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
}
