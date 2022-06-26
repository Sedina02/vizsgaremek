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
    this.ar.params.subscribe({
      next: (param) =>
        (this.dessert$ = this.dessertService.getOne(param['id'])),
    });
    this.dessert$.subscribe({
      next: (dessert) => (this.dessert = dessert ? dessert : this.dessert),
    });
  }

  update(dessert: Dessert) {
    this.dessertService.update(dessert).subscribe(
      (dessert) => this.router.navigate(['/', 'dessert']),
      err => console.error(err),
    );
  }

  create(dessert: Dessert): void {
    this.dessertService.create(dessert).subscribe(
      (dessert) => this.router.navigate(['/', 'dessert']),
      err => console.error(err)
    );
  }
}
