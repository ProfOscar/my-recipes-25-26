import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  @Input() recipe: RecipeModel | undefined
  
}
