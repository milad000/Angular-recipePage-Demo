import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] =[
   new Recipe ('Milad',
  'this is a simple recipe',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivP1llSFce8ZXlwKRnZrQwJozQtyRDwKfscSxcKMvkUaGZ1fY'),
  new Recipe ('Sia',
  'this is a simple recipe',
  'https://www.underconsideration.com/brandnew/archives/firefox_2017_logo.jpg')
];

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
