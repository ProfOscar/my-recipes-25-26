import { Component } from '@angular/core';
import { ShoppingEdit } from "./shopping-edit/shopping-edit";
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEdit],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList {

  ingredients: IngredientModel[] = [
    new IngredientModel('Pomodori', 5),
    new IngredientModel('Panna', 250)
  ]

  onIngredientAdded(ingredient: IngredientModel) {
    let ingredientFounded = this.ingredients.find(item => item.name.toLowerCase() == ingredient.name.toLowerCase());
    if (ingredientFounded == undefined) {
      this.ingredients.push(ingredient);
    } else {
      ingredientFounded.amount += ingredient.amount;
    }
  }
}
