import { inject, Injectable } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { RecipeModel } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private dataStorage = inject(DataStorageService);

  recipes: RecipeModel[] = [];
  selectedRecipe?: RecipeModel;

  getRecipes() {
    this.dataStorage.inviaRichiesta("GET", "/recipes")?.subscribe({
      next: (recipesArray: any) => {
        this.recipes = recipesArray;
        // this.selectedRecipe = this.recipes.length > 0 ? this.recipes[0] : undefined;
        console.log(this.recipes);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }
}
