import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/food-library/recipe.service';
import { RecipeResponse } from '@models/RecipeResponse';
import { MatDialog } from '@angular/material/dialog';
import { RecipeAddDialogComponent } from '../add-dialog/recipe-add-dialog.component';

@Component({
  selector: 'app-food-library-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit {
  recipes: RecipeResponse[] = [];

  constructor(private recipeService: RecipeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((data) => {
      if (data) {
        this.recipes = data;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RecipeAddDialogComponent);
  }
}
