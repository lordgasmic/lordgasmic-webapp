import { Component } from '@angular/core';
import { GroceryService } from '../../../services/food-library/grocery.service';
import { DEPARTMENTS } from '@models/food-library/GroceryConstants';

@Component({
  selector: 'app-add',
  templateUrl: './grocery-add.component.html',
  styleUrls: ['./grocery-add.component.scss']
})
export class GroceryAddComponent {
  departments = DEPARTMENTS;
  selectedDepartment: string;
  txtQuantity: string;
  txtItem: string;

  constructor(groceryService: GroceryService) {}

  submit(): void {
    console.log(this.selectedDepartment);
    console.log(this.txtQuantity);
    console.log(this.txtItem);
  }
}
