import { TestBed } from '@angular/core/testing';

import { MainCourseService } from './main-course.service';

describe('MainCourseService', () => {
  let service: MainCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
