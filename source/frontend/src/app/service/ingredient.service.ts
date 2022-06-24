import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends BaseService<Ingredient>{


  constructor(
    http: HttpClient,
  ) {
    super(http, "ingredient")
  }
}
