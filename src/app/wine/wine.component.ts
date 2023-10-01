import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WineService } from '../services/wine/wine.service';
import { WineResponse } from '@models/WineResponse';
import { WineNoteResponse } from '@models/WineNoteResponse';
import { WineRatingResponse } from '@models/WineRatingResponse';
import { DialogWineRatingAddComponent } from '../dialog-wine-rating-add/dialog-wine-rating-add.component';
import { WineNoteRequest } from '@models/WineNoteRequest';
import { WineImageDisplay } from '@models/WineImageDisplay';
import { DialogWineImageAddComponent } from '../dialog-wine-image-add/dialog-wine-image-add.component';
import { WineImage } from '@models/WineImage';
import { DialogWineRatingEditComponent } from '../dialog-wine-rating-edit/dialog-wine-rating-edit.component';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss'],
})
export class WineComponent implements OnInit {
  constructor(
    private wineService: WineService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {
    const myDate = new Date();
    this.date = this.datePipe.transform(myDate, 'yyyy-MM-dd');
  }

  @ViewChild('wineNote') wineNoteRef: ElementRef;
  @ViewChildren('inptWineNotes') inputWineNotes: QueryList<ElementRef>;

  wineResponse: WineResponse;
  wineNoteResponse: WineNoteResponse;
  wineRatingResponse: Array<WineRatingResponse> = [];
  wineImages: Array<WineImageDisplay> = [];

  wine: Observable<WineResponse>;
  notes: Observable<WineNoteResponse>;
  ratings: Observable<WineRatingResponse[]>;

  myRating: WineRatingResponse;
  averageRating = 0;

  isEditingNotes = false;

  isLoading = false;

  wineId: number;
  date: string;
  addWineNotes: string[] = [];
  private user = sessionStorage.getItem('username');

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.wineId = params.wineId;
      this.wine = this.wineService.getWineById(this.wineId);
      this.notes = this.wineService.getWineNotesByWineId(this.wineId);
      this.ratings = this.wineService.getWineRatingsByUsersForWineIds(['*'], [this.wineId]).pipe(
        tap(ratings => {
          this.myRating = ratings.find(rating => rating.user === this.user);
          console.log(ratings);
          const total = ratings.reduce((total, rating) => { return total + parseInt(rating.rating) }, 0);
          console.log(total);
          this.averageRating = total / ratings.length;
        })
      );
    });
  }

  addRating(): void {
    const dialogRef = this.dialog.open(DialogWineRatingAddComponent, {
      data: { wineId: this.wineId, date: this.date }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.wineRatingResponse.push(result);
      }
    });
  }

  editWineRating(id: number, rating: string): void {
    const dialogRef = this.dialog.open(DialogWineRatingEditComponent, {
      data: { id, rating }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const itemToReplace = this.wineRatingResponse.filter((response) => {
          return response.id === result.id;
        });
        const index = this.wineRatingResponse.indexOf(itemToReplace[0]);

        this.wineRatingResponse[index] = result;
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

    this.inputWineNotes.forEach((item: ElementRef) => {
      req.upsert.push({ id: item.nativeElement.id, note: item.nativeElement.value });
    });

    console.log(req);

    this.wineService.addWineNotes(req).subscribe((response) => {
      this.wineNoteResponse.wineNotes = response.wineNotes;
    });

    this.addWineNotes = [];
    this.toggleEditingNotes();
  }

  addNote(): void {
    const note = this.wineNoteRef.nativeElement.value;
    if (note === '') {
      return;
    }
    this.addWineNotes.push(note);
    this.wineNoteRef.nativeElement.value = '';
    this.wineNoteRef.nativeElement.focus();
  }

  toggleEditingNotes(): void {
    this.isEditingNotes = !this.isEditingNotes;
  }

  addImage(): void {
    const dialogRef = this.dialog.open(DialogWineImageAddComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe((formData: FormData | boolean) => {
      if (formData && typeof formData !== 'boolean') {
        formData.append('wineId', this.wineId + '');

        this.isLoading = true;
        this.wineService.addWineImage(formData).subscribe((response) => {
          response.wineImages.forEach((wi) => {
            this.loadImage(wi);
            this.isLoading = false;
          });
        });
      }
    });
  }

  private loadImage(wineImage: WineImage): void {
    this.wineImages.push({ label: wineImage.label, image: `data:${wineImage.mimeType};base64,${wineImage.image}` });
  }
}
