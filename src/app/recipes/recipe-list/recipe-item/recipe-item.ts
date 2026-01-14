import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../models/recipe.model';
import { HighlightDirective } from '../../../shared/directives/highlight.directive';

@Component({
  selector: 'app-recipe-item',
  imports: [HighlightDirective],
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {
  @Input() item!: RecipeModel
}
