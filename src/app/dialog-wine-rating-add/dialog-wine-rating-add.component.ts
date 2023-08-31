import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WineService } from '../services/wine/wine.service';
import { WineRatingDialogData } from '../models/WineRatingDialogData';
import { WineRatingRequest } from '../models/WineRatingRequest';

@Component({
  selector: 'app-dialog-wine-rating-add',
  templateUrl: './dialog-wine-rating-add.component.html',
  styleUrls: ['./dialog-wine-rating-add.component.scss']
})
export class DialogWineRatingAddComponent {
  @ViewChild('rating') ratingRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<DialogWineRatingAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WineRatingDialogData,
    private wineService: WineService
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  submit(): void {
    const rating = this.ratingRef.nativeElement.value;

    const request = new WineRatingRequest();
    request.wineId = this.data.wineId;
    request.date = this.data.date;
    request.user = sessionStorage.getItem('username');
    request.rating = rating;

    this.wineService.addWineRating(request).subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
