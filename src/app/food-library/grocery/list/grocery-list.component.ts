import { Component, OnInit } from '@angular/core';
import { GroceryListResponse } from '@models/food-library/GroceryListResponse';
import { GroceryService } from '../../../services/food-library/grocery.service';

@Component({
  selector: 'app-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  groceryList: GroceryListResponse[] = [];

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.groceryService.groceryList().subscribe((data) => {
      if (data) {
        this.groceryList = data;
      }
    });
  }
}
