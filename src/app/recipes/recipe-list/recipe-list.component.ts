import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
