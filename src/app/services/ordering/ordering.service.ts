import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderingRequest } from '@models/lordgasmic-ordering/OrderingRequest';
import { API_ROOT } from '../ServiceConstants';
import { OrderResponse } from '@models/lordgasmic-ordering/OrderResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderingService {
  private readonly ORDERING = '/api/v1/orders';

  constructor(private http: HttpClient) {}

  placeOrder(orderingRequest: OrderingRequest): Observable<void> {
    return this.http.put<void>(API_ROOT + this.ORDERING, orderingRequest);
  }

  getOrderingHistory(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(API_ROOT + this.ORDERING);
  }
}
