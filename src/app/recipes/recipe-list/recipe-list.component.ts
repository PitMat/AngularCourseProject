import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply description', 'https://embed.widencdn.net/img/beef/tpfhvjvdnh/1120x630px/rancher-recipe-summertime-beef-meatloaf-horizontal.tif?keep=c&u=nvwl20'),
    new Recipe('A Test Recipe', 'This is simply description', 'https://embed.widencdn.net/img/beef/tpfhvjvdnh/1120x630px/rancher-recipe-summertime-beef-meatloaf-horizontal.tif?keep=c&u=nvwl20'),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

