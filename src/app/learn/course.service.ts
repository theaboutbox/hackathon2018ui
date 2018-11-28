import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  /**
   * Courses list
   */
  getCourses(): Observable<Course[]> {
    return of([
      { id: 11, name: 'Course1', discription: 'Course1 aws' },
      { id: 12, name: 'Course1', discription: 'Course1 aws'  },
      { id: 13, name: 'Course1', discription: 'Course1 aws'  },
      { id: 14, name: 'Course1' }
    ]);
  }
}
