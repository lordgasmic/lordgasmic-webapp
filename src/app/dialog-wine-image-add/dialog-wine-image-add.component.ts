import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WineRatingDialogData } from '../models/WineRatingDialogData';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { WineRatingRequest } from '../models/WineRatingRequest';
import { WineImageResponse } from '../models/WineImageResponse';
import { WineImageDialogData } from '../models/WineImageDialogData';

@Component({
  selector: 'app-dialog-wine-image-add',
  templateUrl: './dialog-wine-image-add.component.html',
  styleUrls: ['./dialog-wine-image-add.component.scss']
})
export class DialogWineImageAddComponent {
  @ViewChild('label') labelRef: ElementRef;

  selectedFile: File;

  constructor(
    public dialogRef: MatDialogRef<DialogWineImageAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WineImageDialogData,
    private lordgasmicService: LordgasmicService
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onFileChange(event): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    const label = this.labelRef.nativeElement.value;

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('wineId', this.data.wineId + '');
    uploadImageData.append('label', label);
    this.lordgasmicService.addWineImage(uploadImageData).subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
