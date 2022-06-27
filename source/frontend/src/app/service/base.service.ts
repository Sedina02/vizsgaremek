import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends { _id?: string}> {
  list: T[] = [];
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    @Inject(String) private entity: string
    ) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entity}`);
  }

  findByType(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}recipe/${this.entity}`);
  }

  getOne(_id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entity}/${_id}`);
  }

  getOneRecipe(_id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}recipe/find-one/${_id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entity}`, entity);
  }

  createRecipe(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}recipe`, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}${this.entity}/${entity._id}`,
      entity
    );
  }

  updateRecipe(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}recipe/${entity._id}`,
      entity
    );
  }

  delete(entity: T): Observable<T> {
    return this.http.delete<T>(
      `${this.apiUrl}${this.entity}/${entity._id}`
    );
  }

  deleteRecipe(entity: T): Observable<T> {
    return this.http.delete<T>(
      `${this.apiUrl}recipe/${entity._id}`
    );
  }
}
