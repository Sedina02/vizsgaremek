import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { MainCourseComponent } from './page/main-course/main-course.component';
import { AppetizerComponent } from './page/appetizer/appetizer.component';
import { SoupComponent } from './page/soup/soup.component';
import { DessertComponent } from './page/dessert/dessert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEditAppetizerComponent } from './page/add-edit-appetizer/add-edit-appetizer.component';
import { AddEditDessertComponent } from './page/add-edit-dessert/add-edit-dessert.component';
import { AddEditMainCourseComponent } from './page/add-edit-main-course/add-edit-main-course.component';
import { AddEditSoupComponent } from './page/add-edit-soup/add-edit-soup.component';
import { AddEditIngredientComponent } from './page/add-edit-ingredient/add-edit-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainCourseComponent,
    AppetizerComponent,
    SoupComponent,
    DessertComponent,
    AddEditAppetizerComponent,
    AddEditDessertComponent,
    AddEditMainCourseComponent,
    AddEditSoupComponent,
    AddEditIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
