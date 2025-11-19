import { Component } from '@angular/core';
import { RecipeList } from "./recipe-list/recipe-list";
import { RecipeDetail } from "./recipe-detail/recipe-detail";

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RecipeDetail],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {

}
