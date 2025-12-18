import { Component, Input, OnInit } from '@angular/core';
import { DepartmentType } from '@models/food-library/DepartmentType';
import { Item } from '@models/food-library/Item';
import { DEPARTMENTS } from '@models/food-library/GroceryConstants';

@Component({
  selector: 'app-department-row',
  templateUrl: './grocery-department-row.component.html',
  styleUrls: ['./grocery-department-row.component.scss']
})
export class GroceryDepartmentRowComponent implements OnInit {
  @Input()
  rowName: DepartmentType;

  @Input()
  groupedGroceryList: Map<DepartmentType, Item[]>;

  departments = DEPARTMENTS;

  title: string;

  constructor() {}

  ngOnInit(): void {
    console.log('rowname', this.rowName.toString());
    console.log('rowname', DepartmentType[this.rowName].valueOf());
    console.log('groupedGroceryList', this.groupedGroceryList);
    const items = this.groupedGroceryList[this.rowName];
    console.log('items', items);
  }
}
