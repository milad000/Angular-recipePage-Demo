import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient [] = [
  new Ingredient('Apple', 5),
  new Ingredient('banana', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){
      this.ingredients.push(ingredient);
  }
  itemToDeleted(ingredient:Ingredient){
    const indexIng = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(indexIng,1);
  }

}
