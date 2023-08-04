import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category', 'price'];

  //coursesService: CoursesService;

  // injeta o serviço
  constructor(private coursesService: CoursesService) {
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.listAll();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
