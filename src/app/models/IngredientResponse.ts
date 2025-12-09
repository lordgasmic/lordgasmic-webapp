import { IngredientPreparationResponse } from '@models/IngredientPreparationResponse';

export interface IngredientResponse {
  id: number;
  recipeId: number;
  quantity: string;
  uom: string;
  ingredient: string;
  preparations: IngredientPreparationResponse[];
}
