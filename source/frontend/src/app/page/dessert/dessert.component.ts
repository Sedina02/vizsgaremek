import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dessert } from 'src/app/model/dessert';
import { DessertService } from 'src/app/service/dessert.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {

  dessert$: Observable<Dessert[]> = this.dessertService.findByType();

  constructor(
    private dessertService: DessertService
  ) { }

  ngOnInit(): void {
  }

  delete(dessert: Dessert) {
    this.dessertService.deleteRecipe(dessert).subscribe(()=> {
      this.dessert$ = this.dessertService.findByType();
    })
  }
}
