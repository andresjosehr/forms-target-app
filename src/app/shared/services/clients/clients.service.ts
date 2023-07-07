import { Injectable } from '@angular/core';
import { GenericServiceService } from '../generic-service/generic-service.service';
// import { Client } from 'app/interfaces/entities/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends GenericServiceService<any> {

    constructor(
      protected _httpClient: HttpClient,
    ) {
      super(_httpClient, 'clients');
    }
}
