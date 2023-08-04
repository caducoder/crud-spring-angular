import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly BASE_API = '/assets/courses.json'

  // injeto o módulo HttpClient
  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Course[]>(this.BASE_API)
      .pipe(
        first(), // informa que quer apenas a primeira resposta, finalizando a inscrição no observable
        delay(500), // delay em milissegundos
        tap(courses => console.log(courses))
      )
  }
}
