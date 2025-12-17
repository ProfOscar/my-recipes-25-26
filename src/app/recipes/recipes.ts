import { Component } from '@angular/core';
import { RecipeList } from "./recipe-list/recipe-list";
import { RecipeDetail } from "./recipe-detail/recipe-detail";
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RecipeDetail],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {

  selectedRecipe:RecipeModel | undefined;

  onRecipeItemSelected(recipe: RecipeModel) {
    // console.log(recipe);
    this.selectedRecipe = recipe;
  }

}
