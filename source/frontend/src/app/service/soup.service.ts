import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Soup } from '../model/soup';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SoupService extends BaseService<Soup>{


  constructor(
    http: HttpClient,
  ) {
    super(http, "soup")
  }
}
