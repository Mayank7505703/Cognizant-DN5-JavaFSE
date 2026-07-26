import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { CourseCard } from './course-card';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCard]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

    component.course = {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    };

    fixture.detectChanges();
  });

  // Task 101
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Task 102
  it('should render course name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Angular');
  });

  // Task 103
  it('should render course code', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('ANG101');
  });

  // Task 104
  it('should emit enrollRequested event', () => {
    spyOn(component.enrollRequested, 'emit');

    component.enroll();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Task 105
  it('should call ngOnChanges', () => {

    spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(null, component.course, true)
    });

    expect(console.log).toHaveBeenCalled();

  });

});
