import { Component, ElementRef, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { Router } from '@angular/router';

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
    private lordgasmicService: LordgasmicService,
    private router: Router,
    private zone: NgZone
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    const name = this.nameRef.nativeElement.value;
    const location = this.locationRef.nativeElement.value;

    this.lordgasmicService.addWinery({ name, location }).subscribe((response) => {
      this.zone.run(() => this.router.navigate([`/wineTasting`]));
    });
  }
}
