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

  appetizer$: Observable<Appetizer[]> = this.appetizerService.findByType();

  constructor(
    private appetizerService: AppetizerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  edit(appetizer: Appetizer){
    this.router.navigate(['/', 'AddEditAppetizer/'+ appetizer._id]);
  }

  delete(appetizer: Appetizer) {
    this.appetizerService.deleteRecipe(appetizer).subscribe({
      next: () => (this.appetizer$ = this.appetizerService.findByType()),
      error: (err) => console.error(err),
    });
  }

}
