import { inject, Injectable } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { IngredientModel } from '../../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private dataStorage = inject(DataStorageService)

  ingredients: IngredientModel[] = [];

  getIngredients() {
    this.dataStorage.inviaRichiesta("GET", "/shopping-list")?.subscribe({
      next: (ingredientsArray: any) => {
        this.ingredients = ingredientsArray;
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    });
  }

  addIngredient(ingredient: IngredientModel) {
    let ingredientFounded = this.ingredients.find(item => item.name.toLowerCase() == ingredient.name.toLowerCase());
    if (ingredientFounded == undefined) {
      this.ingredients.push(ingredient);
      this.dataStorage.inviaRichiesta("POST", "/shopping-list", ingredient)?.subscribe({
        error: (err: any) => {
          console.log(err);
          alert(err.message);
        }
      });
    } else {
      ingredientFounded.amount += ingredient.amount;
    }
  }
}
