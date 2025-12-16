import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/food-library/recipe.service';
import { RecipeResponse } from '@models/RecipeResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-library-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipe: RecipeResponse;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeService.getRecipeById(params.recipeId).subscribe((data) => {
        if (data) {
          this.recipe = data;
        }
      });
    });
  }
}
