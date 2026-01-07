import { Component, EventEmitter, Output } from '@angular/core';
import { IngredientModel } from '../../models/ingredient.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css',
})
export class ShoppingEdit {
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  name: string = "";
  amount: number = 0;

  onAddClick() {
    if (this.name == "") {
      alert("Il nome dell'ingrediente è obbligatorio");
      return;
    }
    if (this.amount <= 0) {
      alert("La quantità deve essere maggiore di 0");
    }
    let ingredient: IngredientModel = new IngredientModel(this.name, this.amount);
    this.ingredientAdded.emit(ingredient);
    this.onClearClick();
  }

  onClearClick(){
    this.name = "";
    this.amount = 0;
  }
}
