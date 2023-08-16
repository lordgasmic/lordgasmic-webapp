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
import { WineryResponse } from '../../models/WineryResponse';
import { WineResponse } from '../../models/WineResponse';
import { WineNoteResponse } from '../../models/WineNoteResponse';
import { WineRatingResponse } from '../../models/WineRatingResponse';
import { WineryRequest } from '../../models/WineryRequest';
import { WineRequest } from '../../models/WineRequest';
import { WineRatingRequest } from '../../models/WineRatingRequest';
import { WineNoteRequest } from '../../models/WineNoteRequest';
import { WineDisplay } from '../../models/WineDisplay';
import { WineImageResponse } from '../../models/WineImageResponse';
import { GasRequest } from '../../models/GasRequest';
import { GasResponse } from '../../models/GasResponse';
import { WineRatingEditRequest } from '../../models/WineRatingEditRequest';
import { RecipeResponse } from '../../models/RecipeResponse';
import { IngredientResponse } from '../../models/IngredientResponse';
import { TagResponse } from '../../models/TagResponse';
import { DirectionResponse } from '../../models/DirectionResponse';
import { WebappConstants } from '../../configuration/WebappConstants';

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
  private readonly MEME = '/v1/memes/tag/';
  private readonly WINERIES = '/v1/wineries/';
  private readonly WINES = '/v1/wines/';
  private readonly WINE_NOTES = '/v1/wineNotes/';
  private readonly WINE_RATING = '/v1/wineRating/';
  private readonly WINE_RATING_EDIT = '/v1/wineRating/edit';
  private readonly USERS = '/v1/users';
  private readonly WINE_IMAGES = '/v1/wineImages';
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
      tap(response => {
         localStorage.setItem(WebappConstants.LORDGASMIC_AUTH_TOKEN, response.token);
      })
    );
  }

  getMemes(tag: string): Observable<Array<MemeResponse>> {
    return new Observable((observer: Observer<Array<MemeResponse>>) => {
      this.http.get<Array<MemeResponse>>(this.API + this.MEME + tag).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWineries(): Observable<Array<WineryResponse>> {
    return new Observable((observer: Observer<Array<WineryResponse>>) => {
      this.http.get<Array<WineryResponse>>(this.API + this.WINERIES).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWinery(id: number): Observable<WineryResponse> {
    return new Observable((observer: Observer<WineryResponse>) => {
      this.http.get<WineryResponse>(this.API + this.WINERIES + id).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getAllWines(): Observable<Array<WineResponse>> {
    return new Observable((observer: Observer<Array<WineResponse>>) => {
      this.http.get<Array<WineResponse>>(this.API + this.WINES).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWinesByWinery(id: number): Observable<Array<WineDisplay>> {
    return new Observable((observer: Observer<Array<WineDisplay>>) => {
      this.http.get<Array<WineDisplay>>(this.API + this.WINES + `?wineryId=${id}`).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWineById(id: number): Observable<WineResponse> {
    return new Observable((observer: Observer<WineResponse>) => {
      this.http.get<WineResponse>(this.API + this.WINES + `?wineId=${id}`).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getAllWineNotes(): Observable<WineNoteResponse> {
    return new Observable((observer: Observer<WineNoteResponse>) => {
      this.http.get<WineNoteResponse>(this.API + this.WINE_NOTES).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWineNotesByUser(user: string): Observable<WineNoteResponse> {
    return new Observable((observer: Observer<WineNoteResponse>) => {
      this.http.get<WineNoteResponse>(this.API + this.WINE_NOTES + `?user=${user}`).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWineNotesByWineId(wineId: number): Observable<WineNoteResponse> {
    return new Observable((observer: Observer<WineNoteResponse>) => {
      this.http.get<WineNoteResponse>(this.API + this.WINE_NOTES + `?wineId=${wineId}`).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getAllWineRatings(): Observable<Array<WineRatingResponse>> {
    return new Observable((observer: Observer<Array<WineRatingResponse>>) => {
      this.http.get<Array<WineRatingResponse>>(this.API + this.WINE_RATING).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWineRatingsByUser(user: string): Observable<Array<WineRatingResponse>> {
    return new Observable((observer: Observer<Array<WineRatingResponse>>) => {
      this.http.get<Array<WineRatingResponse>>(this.API + this.WINE_RATING + `?user=${user}`).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWineRatingByWineId(wineId: number): Observable<Array<WineRatingResponse>> {
    return new Observable((observer: Observer<Array<WineRatingResponse>>) => {
      this.http.get<Array<WineRatingResponse>>(this.API + this.WINE_RATING + `?wineId=${wineId}`).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  getWineRatingsByUsersForWineIds(users: string[], wineIds: number[]): Observable<Array<WineRatingResponse>> {
    return new Observable((observer: Observer<Array<WineRatingResponse>>) => {
      this.http
        .post<Array<WineRatingResponse>>(this.API + this.WINE_RATING, { users, wineIds })
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  addWinery(wineryRequest: WineryRequest): Observable<WineryResponse> {
    return new Observable((observer: Observer<WineryResponse>) => {
      this.http.put<WineryResponse>(this.API + this.WINERIES, wineryRequest).subscribe(
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

  addWine(wineRequest: WineRequest): Observable<WineResponse> {
    return new Observable((observer: Observer<WineResponse>) => {
      this.http.put<WineResponse>(this.API + this.WINES, wineRequest).subscribe(
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

  addWineRating(wineRatingRequest: WineRatingRequest): Observable<WineRatingResponse> {
    return new Observable((observer: Observer<WineRatingResponse>) => {
      this.http.put<WineRatingResponse>(this.API + this.WINE_RATING, wineRatingRequest).subscribe(
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

  editWineRating(request: WineRatingEditRequest): Observable<WineRatingResponse> {
    return new Observable((observer: Observer<WineRatingResponse>) => {
      this.http.put<WineRatingResponse>(this.API + this.WINE_RATING_EDIT, request).subscribe(
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

  addWineNotes(wineNotesRequest: WineNoteRequest): Observable<WineNoteResponse> {
    return new Observable((observer: Observer<WineNoteResponse>) => {
      this.http.put<WineNoteResponse>(this.API + this.WINE_NOTES, wineNotesRequest).subscribe(
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

  getUsersByRole(role: number): Observable<Array<string>> {
    return new Observable((observer: Observer<Array<string>>) => {
      this.http.get<Array<string>>(this.API + this.USERS + `?role=${role}`).subscribe(
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

  addWineImage(uploadImageData: FormData): Observable<WineImageResponse> {
    return new Observable((observer: Observer<WineImageResponse>) => {
      this.http.put<WineImageResponse>(this.API + this.WINE_IMAGES, uploadImageData).subscribe(
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

  getWineImages(wineId: number): Observable<WineImageResponse> {
    return new Observable((observer: Observer<WineImageResponse>) => {
      this.http.get<WineImageResponse>(this.API + this.WINE_IMAGES + `?wineId=${wineId}`).subscribe(
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
