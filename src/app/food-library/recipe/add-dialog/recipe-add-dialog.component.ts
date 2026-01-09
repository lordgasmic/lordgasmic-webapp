import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../../services/food-library/recipe.service';
import { RecipeAddFormGroup } from '@models/food-library/RecipeAddFormGroup';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastMessageService } from '../../../services/toast-message/toast-message.service';

@Component({
  selector: 'foodlibrary-recipe-add-dialog',
  templateUrl: './recipe-add-dialog.component.html',
  styleUrls: ['./recipe-add-dialog.component.scss']
})
export class RecipeAddDialogComponent implements OnInit {
  formGroup: FormGroup<RecipeAddFormGroup>;

  constructor(
    public dialogRef: MatDialogRef<RecipeAddDialogComponent>,
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router,
    private zone: NgZone,
    private toast: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      url: ['', Validators.required]
    });
  }

  submit(): void {
    this.recipeService.addRecipeByUrl(this.formGroup.controls.url.value).subscribe(
      (response) => {
        this.zone.run(() => this.router.navigateByUrl(`/food-library/recipe/${response.recipeId}`));
      },
      () => {
        this.toast.showToastMessage('Unable to add recipe');
      }
    );
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
