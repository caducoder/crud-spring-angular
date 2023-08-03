import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: 1, name: 'Angular', category: 'Front-End', price: 27.90 }
  ];
  displayedColumns: string[] = ['name', 'category', 'price'];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
