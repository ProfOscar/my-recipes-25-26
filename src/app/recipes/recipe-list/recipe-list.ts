import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  public recipeService = inject(RecipeService);

  onRecipeItemClicked(recipe: RecipeModel) {
    this.recipeService.selectedRecipe = recipe;
  }

  ngOnInit() {
    this.recipeService.getRecipes();
  }
}
