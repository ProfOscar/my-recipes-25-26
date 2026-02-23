import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  public recipeService = inject(RecipeService);
  public shoppingListService = inject(ShoppingListService);

  isDropdownOpen: boolean = false;

  onToShoppingList() {
    console.log("dentro");
    console.log(this.recipeService.selectedRecipe?.ingredients);
    this.shoppingListService.addIngredients(this.recipeService.selectedRecipe?.ingredients);
    alert("Ingredienti aggiunti alla shopping list");
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeService.selectedRecipe!._id!);
  }
}
