import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Soup } from 'src/app/model/soup';
import { SoupService } from 'src/app/service/soup.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-soup',
  templateUrl: './add-edit-soup.component.html',
  styleUrls: ['./add-edit-soup.component.scss'],
})
export class AddEditSoupComponent implements OnInit {

  soup$!: Observable<Soup>;
  soup: Soup = new Soup();
  edit: boolean = true;
  endString = 'soup';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private soupService: SoupService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if(this.router.url.split('/')[1] === 'edit') {
      this.ar.params.subscribe({
           next: (param) =>
             (this.soup$ = this.soupService.getOneRecipe(param['id'])),
         });
         this.soup$.subscribe({
           next: (soup) => (this.soup = soup ? soup : this.soup),
         });
    }
  }

  update(soup: Soup) {
    this.soupService.updateRecipe(soup).subscribe(
      (soup) => this.router.navigate(['/', 'soup']),
      err => console.error(err),
    );
  }

  create(soup: Soup): void {
    const newSoup = {
      ingredients: soup.ingredients,
      name: soup.name,
      typeId: "soup",
      description: soup.description,
      time: soup.time
    }
    this.soupService.createRecipe(newSoup).subscribe(
      (soup) => this.router.navigate(['/', 'soup']),
      err => console.error(err)
    );
  }
}
