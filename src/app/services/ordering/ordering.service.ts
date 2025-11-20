import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderingRequest } from '@models/OrderingRequest';

@Injectable({
  providedIn: 'root'
})
export class OrderingService {
  private readonly API = 'https://lordgasmic.com';
  private readonly ORDERING = '/api/v1/ordering';

  constructor(private http: HttpClient) {}

  placeOrder(orderingRequest: OrderingRequest): Observable<void> {
    return this.http.post<void>(this.API + this.ORDERING, orderingRequest);
  }
}
