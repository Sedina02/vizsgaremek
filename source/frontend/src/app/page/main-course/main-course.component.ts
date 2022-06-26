import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainCourse } from 'src/app/model/main-course';
import { MainCourseService } from 'src/app/service/main-course.service';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.scss']
})
export class MainCourseComponent implements OnInit {

  mainCourse$: Observable<MainCourse[]> = this.mainCourseService.getAll();

  constructor(
    private mainCourseService: MainCourseService
  ) { }

  ngOnInit(): void {
  }

  delete(mainCourse: MainCourse) {
    this.mainCourseService.delete(mainCourse).subscribe(()=> {
      this.mainCourse$ = this.mainCourseService.getAll();
    })
  }
}
