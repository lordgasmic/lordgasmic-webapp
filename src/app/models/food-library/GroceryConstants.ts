import { DepartmentType } from '@models/food-library/DepartmentType';

export const DEPARTMENTS: Map<DepartmentType, string> = new Map<DepartmentType, string>([
  [DepartmentType.NON_FOODS, 'Non-Foods'],
  [DepartmentType.DAIRY, 'Dairy'],
  [DepartmentType.HOUSEHOLD, 'Household'],
  [DepartmentType.BAKING, 'Baking'],
  [DepartmentType.WORLD_FOODS, 'World Foods'],
  [DepartmentType.SHELF_STABLE, 'Shelf Stable'],
  [DepartmentType.BREAKFAST, 'Breakfast'],
  [DepartmentType.SNACKS, 'Snacks'],
  [DepartmentType.MEAT, 'Meat'],
  [DepartmentType.VEGETABLES, 'Vegetables'],
  [DepartmentType.FRUITS, 'Fruits'],
  [DepartmentType.BREAD, 'Bread'],
  [DepartmentType.DELI, 'Deli'],
  [DepartmentType.ALCOHOL, 'Alcohol']
]);
