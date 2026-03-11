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

  editRecipe?: RecipeModel;

  ngOnInit(): void {
    if (!this.recipeService.isNew) {
      // siamo in editing di ricetta esistente
      // popolo i campi
      this.name = this.recipeService.selectedRecipe?.name!;
      this.description = this.recipeService.selectedRecipe?.description!;
      let img: string = this.recipeService.selectedRecipe?.imagePath!;
      this.imageURL = img.indexOf("data:image") == 0 ? "" : img;
      // this.imageBase64 = this.recipeService.selectedRecipe?.imagePath!;
      if (this.recipeService.selectedRecipe?.ingredients) {
        for (let i = 0; i < this.recipeService.selectedRecipe?.ingredients.length; i++) {
          const ing = this.recipeService.selectedRecipe?.ingredients[i];
          this.ingredients += ing.name + ":" + ing.amount + "\n";
        }
      }
      this.editRecipe = this.recipeService.selectedRecipe;
    }
  }

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
    if (this.recipeService.isNew) {
      // Nuova ricetta
      let image = this.imageBase64 ? this.imageBase64 :
        this.imageURL ? this.imageURL : "";
      let ingredientsArray: IngredientModel[] = this.parseIngredients();
      let newRecipe: RecipeModel = new RecipeModel(this.name, this.description, image, ingredientsArray);
      this.recipeService.addRecipe(newRecipe);
    } else {
      // Edit
      this.editRecipe!.name = this.name;
      this.editRecipe!.description = this.description;
      if (this.imageBase64)
        this.editRecipe!.imagePath = this.imageBase64;
      else if (this.imageURL)
        this.editRecipe!.imagePath = this.imageURL;
      this.editRecipe!.ingredients = this.parseIngredients();
      this.recipeService.editRecipe(this.editRecipe!);
    }
  }

  onCancel() {
    this.recipeService.isEditing = false;
  }
}
