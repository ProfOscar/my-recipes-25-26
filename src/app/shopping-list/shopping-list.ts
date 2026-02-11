import { Component, inject } from '@angular/core';
import { ShoppingEdit } from "./shopping-edit/shopping-edit";
import { IngredientModel } from '../models/ingredient.model';
import { HighlightDirective } from "../shared/directives/highlight.directive";
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEdit, HighlightDirective],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList {
  public shoppingListService = inject(ShoppingListService);

  ngOnInit() {
    this.shoppingListService.getIngredients();
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.shoppingListService.addIngredient(ingredient);
  }

  onDelete(ingredientId: string) {
    this.shoppingListService.deleteIngredient(ingredientId);
  }
}
