import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { Ingredient } from 'src/app/shared/models/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list/service/shopping-list.service';

@Injectable({
  providedIn: "root"
})
export class RecipeServiceService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipt",
      "This is simply a test",
      "https://www.cscassets.com/recipes/wide_cknew/wide_50780.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]
    ),
    new Recipe(
      "A test recipt",
      "This is simply a test 223232",
      "https://www.cscassets.com/recipes/wide_cknew/wide_50780.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2)
      ]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredient);
  }
}
