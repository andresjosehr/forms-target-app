import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'app/shared/services/generic-service/generic-service.service';
import { Car } from '../car';
@Injectable({
  providedIn: 'root'
})
export class CarService extends GenericServiceService<Car>{
  constructor(
    protected _httpClient: HttpClient,
  ) {
    super(_httpClient, 'cars');
  }
}
