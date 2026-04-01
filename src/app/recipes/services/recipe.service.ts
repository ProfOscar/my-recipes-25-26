import { inject, Injectable } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { RecipeModel } from '../../models/recipe.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private dataStorage = inject(DataStorageService);
  private router = inject(Router);

  recipes: RecipeModel[] = [];
  selectedRecipe?: RecipeModel;

  getRecipe(id: string) {
    this.dataStorage.inviaRichiesta("GET", "/recipes/" + id)?.subscribe({
      next: (recipe: any) => {
        this.selectedRecipe = recipe;
        console.log(this.selectedRecipe);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }

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

  addRecipe(recipe: RecipeModel) {
    this.dataStorage.inviaRichiesta("POST", "/recipes", recipe)?.subscribe({
      next: (data: any) => {
        this.getRecipes();
        this.router.navigate(['recipes', data.insertedId])
      },
      error: (err: any) => { console.log(err); alert(err.message); }
    });
  }

  editRecipe(recipe: RecipeModel) {
    let id = recipe._id;
    delete recipe._id;
    this.dataStorage.inviaRichiesta("PATCH", "/recipes/" + id, recipe)?.subscribe({
      next: () => {
        this.getRecipes();
        this.router.navigate(['recipes', id])
      },
      error: (err: any) => { console.log(err); alert(err.message); }
    })
  }

  deleteRecipe(recipeId: string) {
    this.dataStorage.inviaRichiesta("DELETE", "/recipes/" + recipeId)?.subscribe({
      next: () => {
        /*
        let recipeFoundedIndex = this.recipes.findIndex(item => item._id == recipeId);
        this.recipes.splice(recipeFoundedIndex, 1);
        */
        this.getRecipes();
        this.selectedRecipe = undefined;
        alert("Ricetta cancellata!");
        this.router.navigateByUrl("/recipes");
      },
      error: (err: any) => { console.log(err); alert(err.message); }
    });
  }
}
