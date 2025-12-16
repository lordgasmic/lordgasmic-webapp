import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/food-library/recipe.service';
import { RecipeResponse } from '@models/RecipeResponse';

@Component({
  selector: 'app-food-library-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit {
  recipes: RecipeResponse[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((data) => {
      if (data) {
        this.recipes = data;
      }
    });
  }
}
