import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Soup } from 'src/app/model/soup';
import { SoupService } from 'src/app/service/soup.service';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.scss']
})
export class SoupComponent implements OnInit {

  soup$: Observable<Soup[]> = this.soupService.getAll();

  constructor(
    private soupService: SoupService
  ) { }

  ngOnInit(): void {
  }

  delete(soup: Soup) {
    this.soupService.delete(soup).subscribe(()=> {
      this.soup$ = this.soupService.getAll();
    })
  }

}
