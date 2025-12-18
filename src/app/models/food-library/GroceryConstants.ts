export const DEPARTMENTS: Map<string, string> = new Map<string, string>([
  ['NON_FOODS', 'Non-Foods'],
  ['DAIRY', 'Dairy'],
  ['HOUSEHOLD', 'Household'],
  ['BAKING', 'Baking'],
  ['WORLD_FOODS', 'World Foods'],
  ['SHELF_STABLE', 'Shelf Stable'],
  ['BREAKFAST', 'Breakfast'],
  ['SNACKS', 'Snacks'],
  ['MEAT', 'Meat'],
  ['VEGETABLES', 'Vegetables'],
  ['FRUITS', 'Fruits'],
  ['BREAD', 'Bread'],
  ['DELI', 'Deli'],
  ['ALCOHOL', 'Alcohol']
]);

export const DEPARTMENT_NAMES: string[] = [...DEPARTMENTS.keys()];
