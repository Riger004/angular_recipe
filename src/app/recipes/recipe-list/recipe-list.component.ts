import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeServiceService } from "../service/recipe-service.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  openNewRecipe() {
    this.route.navigate(["new"], { relativeTo: this.activatedRoute });
  }
}
