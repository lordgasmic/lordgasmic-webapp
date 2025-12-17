import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeResponse } from '@models/RecipeResponse';
import { API_ROOT } from '../ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly RECIPES = '/api/v1/recipes';

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipeResponse[]> {
    return this.http.get<RecipeResponse[]>(`${API_ROOT}${this.RECIPES}`);
  }

  getRecipeById(id: number): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`${API_ROOT}${this.RECIPES}/${id}`);
  }
}
