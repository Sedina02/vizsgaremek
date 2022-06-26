import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MainCourse } from 'src/app/model/main-course';
import { MainCourseService } from 'src/app/service/main-course.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-main-course',
  templateUrl: './add-edit-main-course.component.html',
  styleUrls: ['./add-edit-main-course.component.scss'],
})
export class AddEditMainCourseComponent implements OnInit {

  mainCourse$!: Observable<MainCourse>;
  mainCourse: MainCourse = new MainCourse();
  edit: boolean = true;
  endString = 'mainCourse';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private mainCourseService: MainCourseService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe({
      next: (param) =>
        (this.mainCourse$ = this.mainCourseService.getOne(param['id'])),
    });
    this.mainCourse$.subscribe({
      next: (mainCourse) => (this.mainCourse = mainCourse ? mainCourse : this.mainCourse),
    });
  }

  update(mainCourse: MainCourse) {
    this.mainCourseService.update(mainCourse).subscribe(
      (mainCourse) => this.router.navigate(['/', 'main-course']),
      err => console.error(err),
    );
  }

  create(mainCourse: MainCourse): void {
    this.mainCourseService.create(mainCourse).subscribe(
      (mainCourse) => this.router.navigate(['/', 'main-course']),
      err => console.error(err)
    );
  }
}
