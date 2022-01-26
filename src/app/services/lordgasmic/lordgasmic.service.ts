import { Injectable } from '@angular/core';
import { Expression } from '../../models/Expression';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FeedRequest } from '../../models/FeedRequest';
import { FeedResponse } from '../../models/FeedResponse';
import { Observable, Observer } from 'rxjs';
import { SessionInfo } from '../../models/SessionInfo';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginInfo } from '../../models/LoginInfo';
import { MemeResponse } from '../../models/MemeResponse';
import { WineryResponse } from '../../models/WineryResponse';
import { WineResponse } from '../../models/WineResponse';

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
    return new Observable<LoginInfo>((observer: Observer<LoginInfo>) => {
      this.http.post<LoginInfo>(this.API + this.LOGIN, loginRequest).subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
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

  getWinery(id: string): Observable<WineryResponse> {
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

  getWinesByWinery(id: string): Observable<Array<WineResponse>> {
    const params = new HttpParams();
    params.append('wineryId', id);
    return new Observable((observer: Observer<Array<WineResponse>>) => {
      this.http
        .get<Array<WineResponse>>(this.API + this.WINES, { params })
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  getWineByWinery(id: string): Observable<WineResponse> {
    const params = new HttpParams();
    params.append('wineryId', id);
    return new Observable((observer: Observer<WineResponse>) => {
      this.http
        .get<WineResponse>(this.API + this.WINES, { params })
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }
}
