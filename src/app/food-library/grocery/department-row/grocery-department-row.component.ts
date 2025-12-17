import { Component, Input } from '@angular/core';
import { DepartmentType } from '@models/food-library/DepartmentType';
import { Item } from '@models/food-library/Item';
import { DEPARTMENTS } from '@models/food-library/GroceryConstants';

@Component({
  selector: 'app-department-row',
  templateUrl: './grocery-department-row.component.html',
  styleUrls: ['./grocery-department-row.component.scss']
})
export class GroceryDepartmentRowComponent {
  @Input()
  rowName: DepartmentType;

  @Input()
  groupedGroceryList: Map<DepartmentType, Item[]>;

  departments = DEPARTMENTS;

  constructor() {}
}
