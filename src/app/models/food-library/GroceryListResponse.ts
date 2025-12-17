import { DepartmentType } from '@models/food-library/DepartmentType';

export interface GroceryListResponse {
  id: number;
  department: DepartmentType;
  quantity: string;
  item: string;
}
