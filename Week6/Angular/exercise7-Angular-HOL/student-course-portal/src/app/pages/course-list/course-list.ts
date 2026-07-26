import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') || '';
  }

  viewCourse(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }

  search(): void {
    this.router.navigate(['courses'], {
      queryParams: {
        search: this.searchTerm,
      },
    });
  }
}
