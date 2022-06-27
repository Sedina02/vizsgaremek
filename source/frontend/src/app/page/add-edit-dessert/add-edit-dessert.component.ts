import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Dessert } from 'src/app/model/dessert';
import { DessertService } from 'src/app/service/dessert.service'
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-dessert',
  templateUrl: './add-edit-dessert.component.html',
  styleUrls: ['./add-edit-dessert.component.scss'],
})
export class AddEditDessertComponent implements OnInit {

  dessert$!: Observable<Dessert>;
  dessert: Dessert = new Dessert();
  edit: boolean = true;
  endString = 'dessert';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private dessertService: DessertService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if(this.router.url.split('/')[1] === 'edit') {
      this.ar.params.subscribe({
           next: (param) =>
             (this.dessert$ = this.dessertService.getOneRecipe(param['id'])),
         });
         this.dessert$.subscribe({
           next: (dessert) => (this.dessert = dessert ? dessert : this.dessert),
         });
    }
  }

  update(dessert: Dessert) {
    this.dessertService.updateRecipe(dessert).subscribe(
      (dessert) => this.router.navigate(['/', 'dessert']),
      err => console.error(err),
    );
  }

  create(dessert: Dessert): void {
    const newDessert = {
      ingredients: dessert.ingredients,
      name: dessert.name,
      typeId: "dessert",
      description: dessert.description,
      time: dessert.time
    }
    this.dessertService.createRecipe(newDessert).subscribe(
      (dessert) => this.router.navigate(['/', 'dessert']),
      err => console.error(err)
    );
  }
}
