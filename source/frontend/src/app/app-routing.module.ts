import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppetizerComponent } from './page/appetizer/appetizer.component';
import { DessertComponent } from './page/dessert/dessert.component';
import { HomeComponent } from './page/home/home.component';
import { MainCourseComponent } from './page/main-course/main-course.component';
import { SoupComponent } from './page/soup/soup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'appetizer',
    component: AppetizerComponent
  },
  {
    path: 'soup',
    component: SoupComponent
  },
  {
    path: 'main-course',
    component: MainCourseComponent
  },
  {
    path: 'dessert',
    component: DessertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
