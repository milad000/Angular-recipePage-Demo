import { Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';


import {Ingredient} from '../../shared/Ingredient.model';

import {ShoppingService} from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


    constructor(private shoppingService: ShoppingService) { }

    ngOnInit() {
    }
    onAddData(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        this.shoppingService.addIngredient(newIngredient);
    }

    onClearData(form: NgForm) {
        form.reset();
    }
}
