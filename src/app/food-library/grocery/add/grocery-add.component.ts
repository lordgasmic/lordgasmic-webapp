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

  constructor(private groceryService: GroceryService) {}

  clear(): void {
    this.selectedDepartment = '';
    this.txtQuantity = '';
    this.txtItem = '';
  }

  submit(): void {
    this.groceryService
      .addGroceryItem({ department: this.selectedDepartment, quantity: this.txtQuantity, item: this.txtItem })
      .subscribe(() => {
        this.clear();
      });
  }
}
