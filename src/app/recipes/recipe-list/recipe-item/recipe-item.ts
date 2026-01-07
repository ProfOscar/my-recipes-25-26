import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../models/recipe.model';
import { Highlight } from '../../../shared/highlight';

@Component({
  selector: 'app-recipe-item',
  imports: [Highlight],
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {
  @Input() item!: RecipeModel
}
