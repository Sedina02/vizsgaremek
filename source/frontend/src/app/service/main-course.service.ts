import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainCourse } from '../model/main-course';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MainCourseService extends BaseService<MainCourse>{


  constructor(
    http: HttpClient,
  ) {
    super(http, "main-course")
  }
}
