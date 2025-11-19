import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() isRecipesSelectedEvent = new EventEmitter<boolean>();

  isCollapsed: boolean = true;
  isRecipeActive: boolean = true;

  onClickSelectFeature(feature: string) {
    this.isRecipeActive = feature == "recipe";
    this.isRecipesSelectedEvent.emit(this.isRecipeActive);
  }
}
