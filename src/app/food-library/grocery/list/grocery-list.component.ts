import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../../services/food-library/grocery.service';
import { Item } from '@models/food-library/Item';
import { DepartmentType } from '@models/food-library/DepartmentType';

@Component({
  selector: 'app-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  hasLoaded = false;
  failed = false;
  groupedGroceryList: Map<DepartmentType, Item[]>;

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.groceryService.groceryList().subscribe((data) => {
      if (data) {
        this.groupedGroceryList = new Map<DepartmentType, Item[]>();

        data.forEach((datum) => {
          let items = this.groupedGroceryList.get(datum.department);
          if (!items) {
            items = [];
          }
          items.push({ quantity: datum.quantity, item: datum.item });
          this.groupedGroceryList.set(datum.department, items);
        });
        console.log(this.groupedGroceryList);
        this.hasLoaded = true;
      } else {
        this.failed = true;
      }
    });
  }
}
