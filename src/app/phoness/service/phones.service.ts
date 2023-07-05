import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'app/shared/services/generic-service/generic-service.service';
import { Phones } from '../phones';
@Injectable({
  providedIn: 'root'
})
export class PhonesService extends GenericServiceService<Phones>{
  constructor(
    protected _httpClient: HttpClient,
  ) {
    super(_httpClient, 'phoness');
  }
}
