import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  private store = inject(Store);

  courses$: Observable<Course[]> =
    this.store.select(selectAllCourses);

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

}
