import { Component, OnInit } from '@angular/core';
import { GroceryDepartment } from '@models/food-library/GroceryDepartment';
import { GroceryService } from '../../../services/food-library/grocery.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  departments: GroceryDepartment[] = [
    { label: 'Non-Foods', name: 'non_foods' },
    { label: 'Dairy', name: 'dairy' },
    { label: 'Household', name: 'household' },
    { label: 'Baking', name: 'baking' },
    { label: 'World Foods', name: 'world_foods' },
    { label: 'Shelf Stable', name: 'shelf_stable' },
    { label: 'Breakfast', name: 'breakfast' },
    { label: 'Snacks', name: 'snacks' },
    { label: 'Meat', name: 'meat' },
    { label: 'Vegetables', name: 'vegetables' },
    { label: 'Fruits', name: 'fruits' },
    { label: 'Bread', name: 'bread' },
    { label: 'Deli', name: 'deli' },
    { label: 'Alcohol', name: 'alcohol' }
  ];
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
