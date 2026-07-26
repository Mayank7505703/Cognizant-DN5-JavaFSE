import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm {
  enrollForm;

  constructor(private fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      studentName: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),

      studentEmail: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.simulateEmailCheck()],
      }),

      courseId: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, this.noCourseCode],
      }),

      preferredSemester: this.fb.control('Odd', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      agreeToTerms: this.fb.control(false, {
        nonNullable: true,
        validators: [Validators.requiredTrue],
      }),

      additionalCourses: this.fb.array<FormControl<string>>([]),
    });
  }

  noCourseCode(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value && value.startsWith('XX')) {
      return { noCourseCode: true };
    }

    return null;
  }

  simulateEmailCheck(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (control.value && control.value.includes('test@')) {
            resolve({ emailTaken: true });
          } else {
            resolve(null);
          }
        }, 800);
      });
    };
  }

  get additionalCourses(): FormArray<FormControl<string>> {
    return this.enrollForm.controls.additionalCourses;
  }

  addCourse() {
    this.additionalCourses.push(
      this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    );
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    console.log(this.enrollForm.value);

    console.log(this.enrollForm.getRawValue());
  }
}
