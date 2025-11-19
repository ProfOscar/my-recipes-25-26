import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Recipes } from "./recipes/recipes";
import { ShoppingList } from "./shopping-list/shopping-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Recipes, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-recipes');
}
