import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { WineDialogData } from '../models/WineDialogData';
import { WineRequest } from '../models/WineRequest';

@Component({
  selector: 'app-dialog-wine-add',
  templateUrl: './dialog-wine-add.component.html',
  styleUrls: ['./dialog-wine-add.component.scss']
})
export class DialogWineAddComponent {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('style') styleRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<DialogWineAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WineDialogData,
    private lordgasmicService: LordgasmicService
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  submit(): void {
    const name = this.nameRef.nativeElement.value;
    const style = this.styleRef.nativeElement.value;

    const request = new WineRequest();
    request.name = name;
    request.style = style;
    request.wineryId = this.data.wineryId;

    this.lordgasmicService.addWine(request).subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
