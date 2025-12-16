import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GroceryAddRequest } from '@models/food-library/GroceryAddRequest';
import { Observable } from 'rxjs';
import { API_ROOT } from '../GlobalConstants';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private readonly GROCERY = '/api/v1/grocery';

  constructor(private http: HttpClient) {}

  addGroceryItem(request: GroceryAddRequest): Observable<HttpResponse<void>> {
    return this.http.put<HttpResponse<void>>(API_ROOT + this.GROCERY, request);
  }
}
