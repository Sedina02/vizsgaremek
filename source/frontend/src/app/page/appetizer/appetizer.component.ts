import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appetizer } from 'src/app/model/appetizer';
import { AppetizerService } from 'src/app/service/appetizer.service';

@Component({
  selector: 'app-appetizer',
  templateUrl: './appetizer.component.html',
  styleUrls: ['./appetizer.component.scss']
})
export class AppetizerComponent implements OnInit {

  appetizer$: Observable<Appetizer[]> = this.appetizerService.getAll();

  constructor(
    private appetizerService: AppetizerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  edit(appetizer: Appetizer): void {
    this.router.navigate(['/', 'appetizer', 'edit', appetizer._id]);
  }

  delete(appetizer: Appetizer) {
    this.appetizerService.delete(appetizer).subscribe(()=> {
      this.appetizer$ = this.appetizerService.getAll();
    })
  }

}
