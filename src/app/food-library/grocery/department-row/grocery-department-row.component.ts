import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@models/food-library/Item';
import { DEPARTMENTS } from '@models/food-library/GroceryConstants';

@Component({
  selector: 'app-department-row',
  templateUrl: './grocery-department-row.component.html',
  styleUrls: ['./grocery-department-row.component.scss']
})
export class GroceryDepartmentRowComponent implements OnInit {
  @Input()
  rowName: string;

  @Input()
  groupedGroceryList: Map<string, Item[]>;

  departments = DEPARTMENTS;

  items: Item[];

  constructor() {}

  ngOnInit(): void {
    this.items = this.groupedGroceryList.get(this.rowName);
  }
}
