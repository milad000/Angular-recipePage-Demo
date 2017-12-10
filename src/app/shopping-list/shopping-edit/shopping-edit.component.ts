import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

import {Ingredient} from '../../shared/Ingredient.model';

import {ShoppingService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') nameInputRef: ElementRef;
  @ViewChild('inputAmount') amountInputRef: ElementRef;



  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
  onAddData(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.shoppingService.addIngredients(newIngredient);

  }
  onDeleteData(){}
  onClearData(){
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
