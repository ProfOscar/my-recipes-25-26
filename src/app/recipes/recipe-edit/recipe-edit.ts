import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';
import { IngredientModel } from '../../models/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  imports: [FormsModule],
  templateUrl: './recipe-edit.html',
  styleUrl: './recipe-edit.css',
})
export class RecipeEdit {
  public recipeService = inject(RecipeService);

  name: string = "";
  description: string = "";
  imageURL: string = "";
  imageBase64: string = "";
  ingredients: string = "";

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        this.imageBase64 = reader.result!.toString();
      }
      reader.readAsDataURL(file);
    }
  }

  parseIngredients(): IngredientModel[] {
    let retVal: IngredientModel[] = [];
    let ausVet = this.ingredients.split("\n");
    for (const item of ausVet) {
      if (item) {
        let ausObj = item.split(":");
        retVal.push(new IngredientModel(ausObj[0].toString(), Number(ausObj[1])));
      }
    }
    return retVal;
  }

  onSave() {
    // Nuova ricetta
    let image = this.imageBase64 ? this.imageBase64 :
      this.imageURL ? this.imageURL : "";
    let ingredientsArray: IngredientModel[] = this.parseIngredients();
    let newRecipe: RecipeModel = new RecipeModel(this.name, this.description, image, ingredientsArray);
    this.recipeService.addRecipe(newRecipe);
  }

  onCancel() {
    this.recipeService.isEditing = false;
  }
}
