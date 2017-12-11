import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
  new Recipe ('Milad',
  'this is a simple recipe',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivP1llSFce8ZXlwKRnZrQwJozQtyRDwKfscSxcKMvkUaGZ1fY'),
  new Recipe ('Sia',
  'this is a simple recipe',
  'https://www.underconsideration.com/brandnew/archives/firefox_2017_logo.jpg')
  ];

  getRecipes() {
      return this.recipes.slice();
  }

}
