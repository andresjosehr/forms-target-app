import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'app/shared/services/generic-service/generic-service.service';
import { Asignature } from '../asignature';

@Injectable({
  providedIn: 'root'
})
export class AsignatureService extends GenericServiceService<Asignature>{

  constructor(
    protected _httpClient: HttpClient,
  ) {
    super(_httpClient, 'asignatures');
  }

}
