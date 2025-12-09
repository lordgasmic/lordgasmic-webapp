import { DirectionResponse } from '@models/DirectionResponse';
import { IngredientResponse } from '@models/IngredientResponse';

export interface RecipeResponse {
  id: number;
  name: string;
  description: string;
  ingredients: IngredientResponse[];
  directions: DirectionResponse[];
}
