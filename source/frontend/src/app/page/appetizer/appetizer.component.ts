import { Component, OnInit } from '@angular/core';
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
    private appetizerService: AppetizerService
  ) { }

  ngOnInit(): void {
  }

  delete(appetizer: Appetizer) {
    this.appetizerService.delete(appetizer).subscribe(()=> {
      this.appetizer$ = this.appetizerService.getAll();
    })
  }

}
