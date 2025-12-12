import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe/recipe.service';
import { DirectionRow, IngredientRow, RecipeForm } from '@models/RecipeForm';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {
  formGroup: FormGroup<RecipeForm>;

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group<RecipeForm>({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array<FormGroup<IngredientRow>>([]),
      directions: this.fb.array<FormGroup<DirectionRow>>([])
    });
  }

  get ingredientsFormArray(): FormArray<FormGroup<IngredientRow>> {
    return this.formGroup.get('ingredients') as FormArray<FormGroup<IngredientRow>>;
  }

  get directionsFormArray(): FormArray<FormGroup<DirectionRow>> {
    return this.formGroup.get('directions') as FormArray<FormGroup<DirectionRow>>;
  }

  addIngredientRow(): void {
    this.ingredientsFormArray.push(
      this.fb.group<IngredientRow>({
        quantity: ['', Validators.required],
        uom: [''],
        ingredient: ['', Validators.required]
      })
    );
  }

  addDirectionRow(): void {
    this.directionsFormArray.push(
      this.fb.group<DirectionRow>({
        direction: ['', Validators.required]
      })
    );
  }

  submit(): void {}
}
