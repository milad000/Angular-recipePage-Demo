import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';

import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient [];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
      this.ingredients = this.shoppingService.getIngredients();
      this.shoppingService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
          }
      );
      console.log("ingredients from ngOnInit > "+ this.ingredients);
  }

  onIngredientAdded(ingredient:Ingredient){
      this.ingredients.push(ingredient);
  }
  itemToDeleted(ingredient:Ingredient){
    const indexIng = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(indexIng,1);
  }

}
