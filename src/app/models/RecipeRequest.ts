import { IngredientRequest } from '@models/IngredientRequest';
import { DirectionRequest } from '@models/DirectionRequest';

export interface RecipeRequest {
  name: string;
  description: string;
  ingredients: IngredientRequest[];
  directions: DirectionRequest[];
}
