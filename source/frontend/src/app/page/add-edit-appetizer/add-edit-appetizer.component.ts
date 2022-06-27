import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Appetizer } from 'src/app/model/appetizer';
import { AppetizerService } from 'src/app/service/appetizer.service'
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-appetizer',
  templateUrl: './add-edit-appetizer.component.html',
  styleUrls: ['./add-edit-appetizer.component.scss'],
})
export class AddEditAppetizerComponent implements OnInit {

  appetizer$!: Observable<Appetizer>;
  appetizer: Appetizer = new Appetizer();
  edit: boolean = true;
  endString = 'appetizer';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private appetizerService: AppetizerService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if(this.router.url.split('/')[1] === 'edit') {
      this.ar.params.subscribe({
           next: (param) =>
             (this.appetizer$ = this.appetizerService.getOneRecipe(param['id'])),
         });
         this.appetizer$.subscribe({
           next: (appetizer) => (this.appetizer = appetizer ? appetizer : this.appetizer),
         });
    }
  }

  update(appetizer: Appetizer) {
    this.appetizerService.updateRecipe(appetizer).subscribe(
      (appetizer) => this.router.navigate(['/', 'appetizer']),
      err => console.error(err),
    );
  }

  create(appetizer: Appetizer): void {
    const newAppetizer = {
      ingredients: appetizer.ingredients,
      name: appetizer.name,
      typeId: "appetizer",
      description: appetizer.description,
      time: appetizer.time
    }
    this.appetizerService.createRecipe(newAppetizer).subscribe(
      (appetizer) => this.router.navigate(['/', 'appetizer']),
      err => console.error(err)
    );
  }
}
