import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipt',
      'This is simply a test',
      'https://www.cscassets.com/recipes/wide_cknew/wide_50780.jpg'
    ),
    new Recipe(
      'A test recipt',
      'This is simply a test',
      'https://www.cscassets.com/recipes/wide_cknew/wide_50780.jpg'
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
