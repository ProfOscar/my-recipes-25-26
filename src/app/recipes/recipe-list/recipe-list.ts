import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  public recipeService = inject(RecipeService);
  public shoppingListService = inject(ShoppingListService);

  ngOnInit() {
    this.recipeService.getRecipes();
    this.shoppingListService.getIngredients();
  }

  onRecipeItemClicked(recipe: RecipeModel) {
    this.recipeService.selectedRecipe = recipe;
  }

  onNewRecipe() {
    // console.log("onNewRecipe");
    this.recipeService.isEditing = true;
    this.recipeService.isNew = true;
  }
}
