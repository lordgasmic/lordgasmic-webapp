import { Component, OnInit } from '@angular/core';
import { GroceryDepartment } from '@models/food-library/GroceryType';
import { GroceryService } from '../../../services/food-library/grocery.service';
import { DEPARTMENTS } from '@models/food-library/GroceryConstants';

@Component({
  selector: 'app-add',
  templateUrl: './grocery-add.component.html',
  styleUrls: ['./grocery-add.component.scss']
})
export class GroceryAddComponent implements OnInit {
  departments = DEPARTMENTS;
  selectedDepartment: GroceryDepartment;
  txtQuantity: string;
  txtItem: string;

  constructor(groceryService: GroceryService) {}

  ngOnInit(): void {}

  submit(): void {
    console.log(this.selectedDepartment.name);
    console.log(this.txtQuantity);
    console.log(this.txtItem);
  }
}
