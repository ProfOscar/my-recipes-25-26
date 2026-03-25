import { Component, inject } from '@angular/core';
import { RouterOutlet } from "@angular/router";

import { RecipeList } from "./recipe-list/recipe-list";
import { RecipeDetail } from "./recipe-detail/recipe-detail";
import { RecipeService } from './services/recipe.service';
import { RecipeEdit } from './recipe-edit/recipe-edit';

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RouterOutlet],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes { 
  public recipeService = inject(RecipeService);
}
