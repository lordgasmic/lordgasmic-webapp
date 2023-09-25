import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { WineryRequest } from '@models/WineryRequest';
import { WineService } from '../services/wine/wine.service';

@Component({
  selector: 'app-dialog-winery-add',
  templateUrl: './dialog-winery-add.component.html',
  styleUrls: ['./dialog-winery-add.component.scss']
})
export class DialogWineryAddComponent {

  form = this.fb.nonNullable.group({
    name: '',
    location: ''
  });

  constructor(
    public dialogRef: MatDialogRef<DialogWineryAddComponent>,
    private fb: FormBuilder,
    private wineService: WineService
  ) {}

  submit(): void {
    const winery = { 
      name: this.form.get('name').value,
      location: this.form.get('location').value
    };
    this.wineService.addWinery(winery).subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
