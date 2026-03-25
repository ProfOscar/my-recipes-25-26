import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  public activatedRoute = inject(ActivatedRoute);
  public recipeService = inject(RecipeService);
  public shoppingListService = inject(ShoppingListService);

  isDropdownOpen: boolean = false;

  ngOnInit() {
    // leggere il parametro della route con l'id
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log("Recipe ID: " + params['id']);
        this.recipeService.select(params['id']);
      }
    )
  }

  onToShoppingList() {
    // console.log("dentro");
    // console.log(this.recipeService.selectedRecipe?.ingredients);
    this.shoppingListService.addIngredients(this.recipeService.selectedRecipe?.ingredients);
    alert("Ingredienti aggiunti alla shopping list");
  }

  onEditRecipe() {
    this.recipeService.isEditing = true;
    this.recipeService.isNew = false;
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeService.selectedRecipe!._id!);
  }
}
