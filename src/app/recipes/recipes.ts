import { Component, inject } from '@angular/core';

import { RecipeList } from "./recipe-list/recipe-list";
import { RecipeDetail } from "./recipe-detail/recipe-detail";
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RecipeDetail],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes { 
  public recipeService = inject(RecipeService);
}
