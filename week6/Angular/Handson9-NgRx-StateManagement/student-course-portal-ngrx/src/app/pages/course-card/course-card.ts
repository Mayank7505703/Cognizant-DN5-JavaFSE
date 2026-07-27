import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';
import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

  private store = inject(Store);

  enrolledIds$: Observable<number[]> =
    this.store.select(selectEnrolledIds);

  enroll() {
    this.store.dispatch(
      enrollInCourse({
        courseId: this.course.id
      })
    );
  }

  unenroll() {
    this.store.dispatch(
      unenrollFromCourse({
        courseId: this.course.id
      })
    );
  }

}
