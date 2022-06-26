import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appetizer } from '../model/appetizer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppetizerService extends BaseService<Appetizer>{


  constructor(
    http: HttpClient,
  ) {
    super(http, "appetizer")
  }
}
