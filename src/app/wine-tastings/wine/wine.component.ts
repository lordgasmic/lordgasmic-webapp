import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WineService } from '../../services/wine/wine.service';
import { WineResponse } from '@models/WineResponse';
import { WineNoteResponse } from '@models/WineNoteResponse';
import { WineRatingResponse } from '@models/WineRatingResponse';
import { DialogWineRatingAddComponent } from '../../dialog-wine-rating-add/dialog-wine-rating-add.component';
import { WineNoteRequest } from '@models/WineNoteRequest';
import { WineImageDisplay } from '@models/WineImageDisplay';
import { DialogWineImageAddComponent } from '../../dialog-wine-image-add/dialog-wine-image-add.component';
import { WineImage } from '@models/WineImage';
import { DialogWineRatingEditComponent } from '../../dialog-wine-rating-edit/dialog-wine-rating-edit.component';

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
    private datePipe: DatePipe,
    private fb: FormBuilder
  ) {
    const myDate = new Date();
    this.date = this.datePipe.transform(myDate, 'yyyy-MM-dd');
  }

  wineRatingResponse: Array<WineRatingResponse> = [];

  wine$: Observable<WineResponse>;
  notes$: Observable<WineNoteResponse>;
  ratings$: Observable<WineRatingResponse[]>;

  note = this.fb.control('');
  notesTrackBy = (index, item) => item.id;

  myRating: WineRatingResponse;
  averageRating = 0;

  areRatingsShown = false;
  isLoading = false;

  wineId: number;
  date: string;
  addWineNotes: string[] = [];
  user = sessionStorage.getItem('username');

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.wineId = params.wineId;
      this.wine$ = this.wineService.getWineById(this.wineId);
      this.notes$ = this.wineService.getWineNotesByWineId(this.wineId);
      this.ratings$ = this.wineService.getWineRatingsByUsersForWineIds(['*'], [this.wineId]).pipe(
        tap(ratings => {
          this.myRating = ratings.find(rating => rating.user === this.user);
          const total = ratings.reduce((total, rating) => { return total + parseInt(rating.rating) }, 0);
          this.averageRating = total / ratings.length;
        })
      );
    });
  }

  toggleRatings() {
    this.areRatingsShown = !this.areRatingsShown;
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

  addNote(): void {
    let request = {
      wineId: this.wineId,
      user: this.user,
      date: this.date,
      wineNotes: [this.note.value],
      upsert: []
    };
    this.note.setValue('');
    this.notes$ = this.wineService.addWineNotes(request);
  }

}
