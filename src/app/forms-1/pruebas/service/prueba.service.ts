import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'app/shared/services/generic-service/generic-service.service';
import { Prueba } from '../prueba';

@Injectable({
  providedIn: 'root'
})
export class PruebaService extends GenericServiceService<Prueba>{

  constructor(
    protected _httpClient: HttpClient,
  ) {
    super(_httpClient, 'pruebas');
  }

}
