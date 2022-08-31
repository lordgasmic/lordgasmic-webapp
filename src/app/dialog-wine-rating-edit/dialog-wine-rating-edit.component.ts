import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { WineRatingEditDialogData } from '../models/WineRatingEditDialogData';

@Component({
  selector: 'app-dialog-wine-rating-edit',
  templateUrl: './dialog-wine-rating-edit.component.html',
  styleUrls: ['./dialog-wine-rating-edit.component.scss']
})
export class DialogWineRatingEditComponent implements AfterViewInit {
  @ViewChild('rating') ratingRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<DialogWineRatingEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WineRatingEditDialogData,
    private lordgasmicService: LordgasmicService
  ) {}

  ngAfterViewInit(): void {
    this.ratingRef.nativeElement.value = this.data.rating;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  submit(): void {
    const rating = this.ratingRef.nativeElement.value;

    const request: WineRatingEditDialogData = {
      id: this.data.id,
      rating
    };

    this.lordgasmicService.editWineRating(request).subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
