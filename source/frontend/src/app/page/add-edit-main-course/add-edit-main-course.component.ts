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
    if(this.router.url.split('/')[1] === 'edit') {
      this.ar.params.subscribe({
           next: (param) =>
             (this.mainCourse$ = this.mainCourseService.getOneRecipe(param['id'])),
         });
         this.mainCourse$.subscribe({
           next: (mainCourse) => (this.mainCourse = mainCourse ? mainCourse : this.mainCourse),
         });
    }
  }

  update(mainCourse: MainCourse) {
    this.mainCourseService.updateRecipe(mainCourse).subscribe(
      (mainCourse) => this.router.navigate(['/', 'main-course']),
      err => console.error(err),
    );
  }

  create(mainCourse: MainCourse): void {
    const newMainCourse = {
      ingredients: mainCourse.ingredients,
      name: mainCourse.name,
      typeId: "main-course",
      description: mainCourse.description,
      time: mainCourse.time
    }
    this.mainCourseService.createRecipe(newMainCourse).subscribe(
      (mainCourse) => this.router.navigate(['/', 'main-course']),
      err => console.error(err)
    );
  }
}
