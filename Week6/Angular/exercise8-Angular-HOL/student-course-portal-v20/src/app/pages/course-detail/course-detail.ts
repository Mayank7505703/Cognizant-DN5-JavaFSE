import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course?: Course;
  students: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourseById(id).pipe(

      switchMap(course => {
        this.course = course;
        return this.enrollmentService.getStudentsByCourse(course.id);
      })

    ).subscribe(students => {
      this.students = students;
    });

  }
}
