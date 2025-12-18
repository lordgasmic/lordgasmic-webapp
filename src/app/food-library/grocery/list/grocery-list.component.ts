import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../../services/food-library/grocery.service';
import { Item } from '@models/food-library/Item';
import { DEPARTMENT_NAMES } from '@models/food-library/GroceryConstants';

@Component({
  selector: 'app-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  hasLoaded = false;
  failed = false;
  groupedGroceryList: Map<string, Item[]>;
  departmentNames = DEPARTMENT_NAMES;

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.groceryService.groceryList().subscribe((data) => {
      if (data) {
        this.groupedGroceryList = new Map<string, Item[]>();

        data.forEach((datum) => {
          let items = this.groupedGroceryList.get(datum.department);
          if (!items) {
            items = [];
          }
          items.push({ quantity: datum.quantity, item: datum.item });
          this.groupedGroceryList.set(datum.department, items);
        });
        this.hasLoaded = true;
      } else {
        this.failed = true;
      }
    });
  }
}
