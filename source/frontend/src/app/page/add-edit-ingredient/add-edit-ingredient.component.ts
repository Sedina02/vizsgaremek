import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { IngredientService } from 'src/app/service/ingredient.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-ingredient',
  templateUrl: './add-edit-ingredient.component.html',
  styleUrls: ['./add-edit-ingredient.component.scss'],
})
export class AddEditIngredientComponent implements OnInit {

  ingredient$!: Observable<Ingredient>;
  ingredient: Ingredient = new Ingredient();
  edit: boolean = true;
  endString = 'ingredient';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private ingredientService: IngredientService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if(this.router.url.split('/')[1] === 'edit') {
      this.ar.params.subscribe({
           next: (param) =>
             (this.ingredient$ = this.ingredientService.getOneRecipe(param['id'])),
         });
         this.ingredient$.subscribe({
           next: (ingredient) => (this.ingredient = ingredient ? ingredient : this.ingredient),
         });
    }
  }

  update(ingredient: Ingredient) {
    this.ingredientService.update(ingredient).subscribe({
      next: () =>
        (this.router.navigate(['/', 'ingredient'])),
      })
  }

  create(ingredient: Ingredient): void {
    const newIngredient = {
      allergenId: ingredient.allergenId,
      name: ingredient.name,
    }
    this.ingredientService.create(newIngredient).subscribe(
      (ingredient) => this.router.navigate(['/', 'ingredient']),
      err => console.error(err)
    );
  }
}
