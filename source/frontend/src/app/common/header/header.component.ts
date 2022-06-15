import { Component, OnInit } from '@angular/core';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faCake } from '@fortawesome/free-solid-svg-icons';
import { faBreadSlice} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHouseChimney = faHouseChimney;
  faBowlFood = faBowlFood;
  faUtensils = faUtensils;
  faCake = faCake;
  faBreadSlice = faBreadSlice;

  constructor() { }

  ngOnInit(): void {
  }

}
