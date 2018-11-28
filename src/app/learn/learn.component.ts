import { Course } from './course.model';
import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  courseList: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

   /**
     * Getting the list of Course
     */
    getCourses(): void {
      this.courseService.getCourses()
      .subscribe(courses => this.courseList = courses);
    }

}
