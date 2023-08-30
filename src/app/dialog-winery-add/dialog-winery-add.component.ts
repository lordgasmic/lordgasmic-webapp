import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WineService } from '../services/wine/wine.service';

@Component({
  selector: 'app-dialog-winery-add',
  templateUrl: './dialog-winery-add.component.html',
  styleUrls: ['./dialog-winery-add.component.scss']
})
export class DialogWineryAddComponent {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('location') locationRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<DialogWineryAddComponent>, 
    private wineService: WineService
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  submit(): void {
    const name = this.nameRef.nativeElement.value;
    const location = this.locationRef.nativeElement.value;

    this.wineService.addWinery({ name, location }).subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
