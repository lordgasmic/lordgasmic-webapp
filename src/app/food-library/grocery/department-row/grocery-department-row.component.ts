import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DepartmentType } from '@models/food-library/DepartmentType';
import { Item } from '@models/food-library/Item';
import { DEPARTMENTS } from '@models/food-library/GroceryConstants';

@Component({
  selector: 'app-department-row',
  templateUrl: './grocery-department-row.component.html',
  styleUrls: ['./grocery-department-row.component.scss']
})
export class GroceryDepartmentRowComponent implements OnInit, OnChanges {
  @Input()
  rowName: DepartmentType;

  @Input()
  groupedGroceryList: Map<DepartmentType, Item[]>;

  departments = DEPARTMENTS;

  title: string;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rowName && changes.rowName.currentValue !== null) {
      // Perform logic here when 'data' is not null
      console.log('Data is now available:', changes.rowName.currentValue);
    }
  }
  ngOnInit(): void {
    console.log('rowname', this.rowName);
    console.log('groupedGroceryList', this.groupedGroceryList);
  }
}
