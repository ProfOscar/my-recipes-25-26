import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);
  public recipeService = inject(RecipeService);
  public shoppingListService = inject(ShoppingListService);

  isDropdownOpen: boolean = false;
  id: string = "";

  ngOnInit() {
    // leggere il parametro della route con l'id
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log("Recipe ID: " + params['id']);
        this.id = params['id'];
        this.recipeService.getRecipe(this.id);
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
    // this.router.navigate(['recipes', this.id, 'edit']);
    // this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
    this.router.navigateByUrl(this.router.url + '/edit');
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeService.selectedRecipe!._id!);
  }
}
