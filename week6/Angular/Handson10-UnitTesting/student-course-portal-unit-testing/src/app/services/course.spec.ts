import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch courses', () => {

    const mockCourses: Course[] = [
      {
        id: 1,
        name: 'Angular',
        code: 'Angular2323',
        credits: 2,
        gradeStatus: 'passed'
      }
    ];

    service.getCourses().subscribe((courses: Course[]) => {
      expect(courses.length).toBe(1);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

});
