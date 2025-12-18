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

  departmentTypes: DepartmentType[];

  constructor(private groceryService: GroceryService) {
    const types = Object.keys(DepartmentType);

    this.departmentTypes = [];
    types.forEach((type) => {
      this.departmentTypes.push(DepartmentType[type]);
    });

    console.log('non-foods', this.departmentTypes['NON_FOODS']);
    console.log('non-foods', this.departmentTypes[0]);
    console.log('department types', this.departmentTypes);
  }

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
