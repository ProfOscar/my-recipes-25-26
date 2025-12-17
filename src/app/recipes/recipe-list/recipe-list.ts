import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  @Output() recipeItemSelected = new EventEmitter<RecipeModel>()

  onRecipeItemClicked(recipe: RecipeModel) {
    this.recipeItemSelected.emit(recipe);
  }

  recipes: RecipeModel[] = [
    {
      "name": "Spaghetti alla chitarra",
      "description": "Un particolare tipo di pasta che...",
      "imagePath": "https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/Maccheroni-alla-chitarra.jpg",
      "ingredients": [
        {
          "name": "Apples",
          "amount": 5
        },
        {
          "name": "Tomatoes",
          "amount": 10
        }
      ]
    },
    {
      "name": "Lasagne alla bolognese",
      "description": "Pasta calorica emiliana...",
      "imagePath": "https://www.cucinare.it/uploads/wp-content/uploads/2015/05/pasta_alla_bolognese.webp",
      "ingredients": [
        {
          "name": "Apples",
          "amount": 6
        },
        {
          "name": "Tomatoes",
          "amount": 11
        }
      ]
    },
    {
      "name": "Gnocchi ai formaggi",
      "description": "ottimi soprattutto in montagna...",
      "imagePath": "https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2017/05/1495792337_13c855513b63705bb079c377ed01563d4eb12ccc-223759579.jpg?w=580",
      "ingredients": [
        {
          "name": "Apples",
          "amount": 7
        },
        {
          "name": "Tomatoes",
          "amount": 12
        }
      ]
    },
    {
      "name": "Tiramisu",
      "description": "con panna e mascarcope...",
      "imagePath": "https://www.giallozafferano.com/images/260-26067/Tiramisu_1200x800.jpg",
      "ingredients": [
        {
          "name": "Apples",
          "amount": 8
        },
        {
          "name": "Tomatoes",
          "amount": 13
        }
      ]
    }
  ];

}
