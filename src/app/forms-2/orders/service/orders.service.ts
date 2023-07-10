import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'app/shared/services/generic-service/generic-service.service';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends GenericServiceService<Order>{

  constructor(
    private _http: HttpClient
  ) {
    super(_http, 'orders')
  }
}
