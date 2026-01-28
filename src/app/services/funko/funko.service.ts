import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from '../ServiceConstants';
import { FunkoRequest } from '@models/funkos/FunkoRequest';
import { FunkosResponse } from '@models/funkos/FunkosResponse';
import { FunkoResponse } from '@models/funkos/FunkoResponse';

@Injectable({
  providedIn: 'root'
})
export class FunkoService {
  private readonly FUNKO = '/api/v1/funkos';

  constructor(private http: HttpClient) {}

  getFunkos(): Observable<FunkosResponse> {
    return this.http.get<FunkosResponse>(API_ROOT + this.FUNKO);
  }

  getFunkoById(id: string): Observable<FunkoResponse> {
    return this.http.get<FunkoResponse>(`${API_ROOT}${this.FUNKO}${id}`);
  }

  addFunko(request: FunkoRequest): Observable<void> {
    return this.http.post<void>(API_ROOT + this.FUNKO, request);
  }
}
