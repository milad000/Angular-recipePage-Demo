import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

import {RecipeService}from '../recipe.service'
import {Recipe}from '../recipe.model'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
    recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService : RecipeService) {}

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
    onSubmit(){
//        const newRecipe = new Recipe(
//            this.recipeForm.value['name'],
//            this.recipeForm.value['description'],
//            this.recipeForm.value['imagePath'],
//            this.recipeForm.value['ingredients'],
//        );
        if(this.editMode){
            this.recipeService.updateRecipe(this.id,this.recipeForm.value);
        }else{
            this.recipeService.addRecipe(this.recipeForm.value);
        }
    }
    
    onAddIngredient(){
        (<FormArray>this.recipeForm.get('ingredients')).push(
          new FormGroup({
              'name': new FormControl(),
              'amount': new FormControl()
          })
        )
    }
    
    private initForm(){
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new FormArray([]);
        
        if(this.editMode){
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if(recipe['ingredients']){
                console.log(recipe.ingredients);
                for(let ingredient of recipe.ingredients){
                    recipeIngredients.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name),
                            'anount': new FormControl(ingredient.amount)
                        })
                    );
                }
            }
        }
        
        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName),
            'imagePath': new FormControl(recipeImagePath),
            'description': new FormControl(recipeDescription),
            'ingredients': recipeIngredients
        });
    }

}
