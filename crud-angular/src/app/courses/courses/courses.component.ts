import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // o '$' no final indica que é um observable
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category', 'price'];

  //coursesService: CoursesService;

  // injeta o serviço
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os cursos.')
          return of([])
        })
      );
  }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
