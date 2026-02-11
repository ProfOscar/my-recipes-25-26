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
        console.log(this.ingredients)
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
      this.dataStorage.inviaRichiesta("POST", "/shopping-list", ingredient)?.subscribe({
        next: () => { this.getIngredients(); },
        error: (err: any) => { console.log(err); alert(err.message); }
      });
    } else {
      let newAmount = ingredientFounded.amount + ingredient.amount;
      this.dataStorage.inviaRichiesta("PATCH",
        "/shopping-list/" + ingredientFounded._id,
        { "amount": newAmount })?.
        subscribe({
          next: () => { ingredientFounded.amount = newAmount; },
          error: (err: any) => { console.log(err); alert(err.message); }
        });
    }
  }
}
