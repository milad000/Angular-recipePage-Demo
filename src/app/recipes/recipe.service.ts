import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
  new Recipe ('Milad',
  'this is a simple recipe',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivP1llSFce8ZXlwKRnZrQwJozQtyRDwKfscSxcKMvkUaGZ1fY',
  [
    new Ingredient('meat', 2),
    new Ingredient('bear', 5)
  ]),
  new Recipe ('Sia',
  'this is a simple recipe',
  'https://www.underconsideration.com/brandnew/archives/firefox_2017_logo.jpg',
  [
    new Ingredient('juice', 1),
    new Ingredient('pasta', 2)
  ])
  ];

  constructor(private slService : ShoppingService){}
  getRecipes() {
      return this.recipes.slice();
  }

  onAddIngredientItem(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient);
  }
}
