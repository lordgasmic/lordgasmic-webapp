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

  title: string;

  constructor() {}

  ngOnInit(): void {
    console.log('rowname', this.rowName);
    console.log('groupedGroceryList', this.groupedGroceryList);
    const items = this.groupedGroceryList.get(this.rowName);
    console.log('items', items);
  }
}
