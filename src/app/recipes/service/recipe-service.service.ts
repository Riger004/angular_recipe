import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipeServiceService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipt",
      "This is simply a test",
      "https://www.cscassets.com/recipes/wide_cknew/wide_50780.jpg"
    ),
    new Recipe(
      "A test recipt",
      "This is simply a test 223232",
      "https://www.cscassets.com/recipes/wide_cknew/wide_50780.jpg"
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();
  constructor() {}

  getRecipe(): Recipe[] {
    return this.recipes.slice();
  }
}
