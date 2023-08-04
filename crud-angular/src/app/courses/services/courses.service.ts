import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return [
      { _id: 1, name: 'Angular', category: 'Front-End', price: 27.90 },
      { _id: 2, name: 'React', category: 'Front-End', price: 27.90 },
      { _id: 3, name: 'Vue', category: 'Front-End', price: 27.90 }
    ]
  }
}
