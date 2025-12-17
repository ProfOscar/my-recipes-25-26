import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  imports: [],
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {
  @Input() item!: RecipeModel
  @Output() recipeItemSelected = new EventEmitter<void>()

  onSelected() {
    this.recipeItemSelected.emit();
  }
}
