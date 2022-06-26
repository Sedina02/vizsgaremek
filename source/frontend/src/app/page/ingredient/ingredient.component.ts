import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { IngredientService } from 'src/app/service/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  ingredient$: Observable<Ingredient[]> = this.ingredientService.getAll();

  constructor(
    private ingredientService: IngredientService
  ) { }

  ngOnInit(): void {
  }

  delete(ingredient: Ingredient) {
    this.ingredientService.delete(ingredient).subscribe(()=> {
      this.ingredient$ = this.ingredientService.getAll();
    })
  }
}
