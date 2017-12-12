import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('banana', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
        for (let ingredient of this.ingredients) {
            console.log(ingredient.name);
        }
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        for (let ingredient of this.ingredients) {
            console.log(ingredient.name);
        }
    }
}
