import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeResponse } from '@models/RecipeResponse';
import { RecipeRequest } from '@models/RecipeRequest';
import { RecipeNewResponse } from '@models/RecipeNewResponse';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly API = 'https://lordgasmic.com';
  private readonly RECIPES = '/api/v1/recipes';

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipeResponse[]> {
    return this.http.get<RecipeResponse[]>(`${this.API}${this.RECIPES}`);
  }

  getRecipeById(id: number): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`${this.API}${this.RECIPES}/${id}`);
  }

  postNewRecipe(request: RecipeRequest): Observable<RecipeNewResponse> {
    return this.http.put<RecipeNewResponse>(`${this.API}${this.RECIPES}`, request);
  }
}
