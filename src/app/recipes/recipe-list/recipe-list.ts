import { Component } from '@angular/core';
import { RecipeItem } from "./recipe-item/recipe-item";

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

}
