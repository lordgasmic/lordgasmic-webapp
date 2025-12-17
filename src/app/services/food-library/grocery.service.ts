import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GroceryAddRequest } from '@models/food-library/GroceryAddRequest';
import { Observable } from 'rxjs';
import { API_ROOT } from '../ServiceConstants';
import { GroceryListResponse } from '@models/food-library/GroceryListResponse';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private readonly GROCERIES = '/api/v1/groceries';

  constructor(private http: HttpClient) {}

  addGroceryItem(request: GroceryAddRequest): Observable<HttpResponse<void>> {
    return this.http.put<HttpResponse<void>>(API_ROOT + this.GROCERIES, request);
  }

  groceryList(): Observable<GroceryListResponse[]> {
    return this.http.get<GroceryListResponse[]>(API_ROOT + this.GROCERIES);
  }

  printGroceryList(): Observable<HttpResponse<void>> {
    return this.http.post<HttpResponse<void>>(API_ROOT + this.GROCERIES, null);
  }
}
