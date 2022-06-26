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
    this.ar.params.subscribe({
      next: (param) =>
        (this.soup$ = this.soupService.getOne(param['id'])),
    });
    this.soup$.subscribe({
      next: (soup) => (this.soup = soup ? soup : this.soup),
    });
  }

  update(soup: Soup) {
    this.soupService.update(soup).subscribe(
      (soup) => this.router.navigate(['/', 'soup']),
      err => console.error(err),
    );
  }

  create(soup: Soup): void {
    this.soupService.create(soup).subscribe(
      (soup) => this.router.navigate(['/', 'soup']),
      err => console.error(err)
    );
  }
}
