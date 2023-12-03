import { Injectable } from '@angular/core';
import { Expression } from '../../models/Expression';
import { HttpClient } from '@angular/common/http';
import { FeedRequest } from '../../models/FeedRequest';
import { FeedResponse } from '../../models/FeedResponse';
import { Observable, Observer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionInfo } from '../../models/SessionInfo';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginInfo } from '../../models/LoginInfo';
import { MemeResponse } from '../../models/MemeResponse';
import { GasRequest } from '../../models/GasRequest';
import { GasResponse } from '../../models/GasResponse';
import { RecipeResponse } from '../../models/RecipeResponse';
import { IngredientResponse } from '../../models/IngredientResponse';
import { TagResponse } from '../../models/TagResponse';
import { DirectionResponse } from '../../models/DirectionResponse';
import { WebappConstants } from '../../configuration/WebappConstants';
import { FacetsResponse } from '@models/FacetsResponse';

@Injectable({
  providedIn: 'root'
})
export class LordgasmicService {
  private readonly API = 'https://lordgasmic.com/api';
  private readonly EXPRESSIONS = '/v1/expressions';
  private readonly FEED = '/v2/feed';
  private readonly FEEDS = '/v2/feeds';
  private readonly SESSION = '/v1/session';
  private readonly LOGIN = '/v1/login';
  private readonly LOGOUT = '/v1/logout';
  private readonly MEME = '/v1/memes/tag/';
  private readonly FACETS = '/v1/memes/facets';
  private readonly USERS = '/v1/users';
  private readonly GAS = '/v1/gas';
  private readonly RECIPE = '/v1/recipe';
  private readonly RECIPE_INGREDIENT = '/v1/ingredient';
  private readonly RECIPE_DIRECTION = '/v1/direction';
  private readonly RECIPE_TAG = '/v1/tag';

  constructor(private http: HttpClient) {}

  // getExpressions(): Expression[] {
  getExpressions(): void {
    this.http.get<Expression[]>(this.API + this.EXPRESSIONS).subscribe((expressions) => console.log(expressions));
  }

  putFeed(feed: FeedRequest): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      this.http.put(this.API + this.FEED, feed).subscribe(
        () => {
          observer.next();
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getFeeds(): Observable<FeedResponse[]> {
    return new Observable((observer: Observer<FeedResponse[]>) => {
      this.http.get<FeedResponse[]>(this.API + this.FEEDS).subscribe(
        (feedResponse) => {
          observer.next(feedResponse);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getSessionInfo(): Observable<SessionInfo> {
    return new Observable((observer: Observer<SessionInfo>) => {
      this.http.get<SessionInfo>(this.API + this.SESSION).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  login(loginRequest: LoginRequest): Observable<LoginInfo> {
    return this.http.post<LoginInfo>(this.API + this.LOGIN, loginRequest).pipe(
      tap((response) => {
        localStorage.setItem(WebappConstants.LORDGASMIC_AUTH_TOKEN, response.authToken);
      })
    );
  }

  logout(): Observable<void> {
    return this.http.get<void>(this.API + this.LOGOUT);
  }

  getMemes(tag: string): Observable<Array<MemeResponse>> {
    return new Observable((observer: Observer<Array<MemeResponse>>) => {
      this.http.get<Array<MemeResponse>>(this.API + this.MEME + tag).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getFacets(): Observable<Array<FacetsResponse>> {
    return this.http.get<Array<FacetsResponse>>(this.API + this.FACETS);
  }

  getUsersByRole(role: number): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.API + this.USERS + `?role=${role}`);
  }

  addGas(gasRequest: GasRequest): Observable<GasResponse> {
    return new Observable((observer: Observer<GasResponse>) => {
      this.http.put<GasResponse>(this.API + this.GAS, gasRequest).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getGas(vehicle: string): Observable<Array<GasResponse>> {
    return new Observable((observer: Observer<Array<GasResponse>>) => {
      this.http.get<Array<GasResponse>>(this.API + this.GAS + `?vehicle=${vehicle}`).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getRecipes(): Observable<Array<RecipeResponse>> {
    return new Observable((observer: Observer<Array<RecipeResponse>>) => {
      this.http.get<Array<RecipeResponse>>(this.API + this.RECIPE).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getRecipe(recipeId: number): Observable<RecipeResponse> {
    return new Observable((observer: Observer<RecipeResponse>) => {
      this.http.get<RecipeResponse>(this.API + this.RECIPE + `/${recipeId}`).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getIngredientsForRecipe(recipeId: number): Observable<Array<IngredientResponse>> {
    return new Observable((observer: Observer<Array<IngredientResponse>>) => {
      this.http.get<Array<IngredientResponse>>(this.API + this.RECIPE_INGREDIENT + `/${recipeId}`).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getTagsForRecipe(recipeId: number): Observable<Array<TagResponse>> {
    return new Observable((observer: Observer<Array<TagResponse>>) => {
      this.http.get<Array<TagResponse>>(this.API + this.RECIPE_TAG + `/${recipeId}`).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  getDirectionsForRecipe(recipeId: number): Observable<Array<DirectionResponse>> {
    return new Observable((observer: Observer<Array<DirectionResponse>>) => {
      this.http.get<Array<DirectionResponse>>(this.API + this.RECIPE_DIRECTION + `/${recipeId}`).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }
}
