import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAppetizerComponent } from './page/add-edit-appetizer/add-edit-appetizer.component';
import { AddEditDessertComponent } from './page/add-edit-dessert/add-edit-dessert.component';
import { AddEditIngredientComponent } from './page/add-edit-ingredient/add-edit-ingredient.component';
import { AddEditMainCourseComponent } from './page/add-edit-main-course/add-edit-main-course.component';
import { AddEditSoupComponent } from './page/add-edit-soup/add-edit-soup.component';
import { AppetizerComponent } from './page/appetizer/appetizer.component';
import { DessertComponent } from './page/dessert/dessert.component';
import { HomeComponent } from './page/home/home.component';
import { IngredientComponent } from './page/ingredient/ingredient.component';
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
  },
  {
    path: 'ingredient',
    component: IngredientComponent
  },
  {
    path: 'edit/appetizer/:id',
    component: AddEditAppetizerComponent,
  },
  {
    path: 'new/appetizer',
    component: AddEditAppetizerComponent,
  },
  {
    path: 'edit/dessert/:id',
    component: AddEditAppetizerComponent,
  },
  {
    path: 'new/dessert',
    component: AddEditDessertComponent,
  },
  {
    path: 'edit/main-course/:id',
    component: AddEditMainCourseComponent,
  },
  {
    path: 'new/main-course',
    component: AddEditMainCourseComponent,
  },
  {
    path: 'edit/soup/:id',
    component: AddEditSoupComponent,
  },
  {
    path: 'new/soup',
    component: AddEditSoupComponent,
  },
  {
    path: 'edit/ingredient/:id',
    component: AddEditIngredientComponent,
  },
  {
    path: 'new/ingredient',
    component: AddEditIngredientComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
