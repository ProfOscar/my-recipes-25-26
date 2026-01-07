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
}
