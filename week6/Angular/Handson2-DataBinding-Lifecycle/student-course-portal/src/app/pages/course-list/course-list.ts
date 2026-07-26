import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4 },
    { id: 2, name: 'React', code: 'RCT102', credits: 4 },
    { id: 3, name: 'Java', code: 'JAVA101', credits: 3 },
    { id: 4, name: 'Spring Boot', code: 'SPR201', credits: 5 },
    { id: 5, name: 'SQL', code: 'SQL101', credits: 3 }
  ];

  selectedCourseId = 0;

  onEnroll(id: number) {
    console.log('Enrolling in course:', id);
    this.selectedCourseId = id;
  }
}