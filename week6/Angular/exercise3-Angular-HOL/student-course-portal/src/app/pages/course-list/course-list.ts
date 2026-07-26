import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Java', code: 'JAVA201', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Spring Boot', code: 'SB301', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'React', code: 'RE401', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'SQL', code: 'SQL501', credits: 2, gradeStatus: 'pending' },
  ];

  ngOnInit(): void {
    console.log('ngOnInit called');

    setTimeout(() => {
      console.log('Setting isLoading to false');
      this.isLoading = false;
    }, 1500);
  }

  // trackBy improves performance by reusing DOM elements
  // instead of recreating every item when the list changes.
  trackByCourseId(index: number, course: any) {
    return course.id;
  }
}
