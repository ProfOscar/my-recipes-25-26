import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  public recipeService = inject(RecipeService);
  isDropdownOpen: boolean = false;
}
