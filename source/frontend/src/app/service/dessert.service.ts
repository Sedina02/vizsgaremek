import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dessert } from '../model/dessert';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DessertService extends BaseService<Dessert>{


  constructor(
    http: HttpClient,
  ) {
    super(http, "dessert")
  }
}
