import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../../services/food-library/grocery.service';
import { DEPARTMENTS } from '@models/food-library/GroceryConstants';
import { DepartmentType } from '@models/food-library/DepartmentType';

@Component({
  selector: 'app-add',
  templateUrl: './grocery-add.component.html',
  styleUrls: ['./grocery-add.component.scss']
})
export class GroceryAddComponent implements OnInit {
  departments = DEPARTMENTS;
  mockDepartments: { label: string; type: DepartmentType }[] = [];
  selectedDepartment: DepartmentType;
  txtQuantity: string;
  txtItem: string;

  constructor(groceryService: GroceryService) {}

  ngOnInit(): void {
    this.mockDepartments.push({ type: DepartmentType.NON_FOODS, label: this.departments[DepartmentType.NON_FOODS] });
  }

  submit(): void {
    console.log(this.departments[this.selectedDepartment]);
    console.log(this.txtQuantity);
    console.log(this.txtItem);
  }
}
