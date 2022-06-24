import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMainCourseComponent } from './add-edit-main-course.component';

describe('AddEditMainCourseComponent', () => {
  let component: AddEditMainCourseComponent;
  let fixture: ComponentFixture<AddEditMainCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMainCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMainCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
