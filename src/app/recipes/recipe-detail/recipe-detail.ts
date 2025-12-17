import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  @Input() recipe: RecipeModel | undefined

  isDropdownOpen: boolean = false;
}
