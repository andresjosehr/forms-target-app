import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'app/shared/services/generic-service/generic-service.service';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericServiceService<Product>{
  constructor(
    protected _httpClient: HttpClient,
  ) {
    super(_httpClient, 'products');
  }
}
