import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] =[
   new Recipe ('milad',
  'this is a simple recipe',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivP1llSFce8ZXlwKRnZrQwJozQtyRDwKfscSxcKMvkUaGZ1fY'),
  new Recipe ('milad',
  'this is a simple recipe',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivP1llSFce8ZXlwKRnZrQwJozQtyRDwKfscSxcKMvkUaGZ1fY')
];

  constructor() { }

  ngOnInit() {
  }

}
