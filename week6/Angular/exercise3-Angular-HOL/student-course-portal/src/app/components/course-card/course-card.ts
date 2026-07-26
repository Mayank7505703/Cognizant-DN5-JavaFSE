import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
    enrolled?: boolean;
  };

  isExpanded = false;

  get cardClasses() {
    // Using a getter keeps the template clean and easy to read.
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded,
    };
  }

  getBorderColor() {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      default:
        return 'gray';
    }
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }
}
