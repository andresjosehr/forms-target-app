import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'app/shared/services/generic-service/generic-service.service';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends GenericServiceService<Student>{

  constructor(
    private _http: HttpClient
  ) {
    super(_http, 'students')
  }
}
