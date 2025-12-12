import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface RecipeForm {
  name: FormControl<string>;
  description: FormControl<string>;
  ingredients: FormArray<FormGroup<IngredientRow>>;
  directions: FormArray<FormGroup<DirectionRow>>;
}

export interface IngredientRow {
  quantity: FormControl<string>;
  uom: FormControl<string>;
  ingredient: FormControl<string>;
}

export interface DirectionRow {
  direction: FormControl<string>;
}
