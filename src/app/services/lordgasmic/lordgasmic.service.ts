import { Injectable } from '@angular/core';
import { Expression } from '../../models/Expression';
import { HttpClient } from '@angular/common/http';
import { FeedRequest } from '../../models/FeedRequest';
import { FeedResponse } from '../../models/FeedResponse';
import { Observable, Observer } from 'rxjs';
import { SessionInfo } from '../../models/SessionInfo';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginInfo } from '../../models/LoginInfo';

@Injectable({
  providedIn: 'root',
})
export class LordgasmicService {
  private readonly API = 'https://lordgasmic.com/api';
  private readonly EXPRESSIONS = '/v1/expressions';
  private readonly FEED = '/v2/feed';
  private readonly FEEDS = '/v2/feeds';
  private readonly SESSION = '/v1/session';
  private readonly LOGIN = '/v1/login';

  constructor(private http: HttpClient) {}

  // getExpressions(): Expression[] {
  getExpressions(): void {
    this.http
      .get<Expression[]>(this.API + this.EXPRESSIONS)
      .subscribe((expressions) => console.log(expressions));
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
      this.http
        .get<SessionInfo>(this.API + this.SESSION)
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  login(loginRequest: LoginRequest): Observable<LoginInfo> {
    return new Observable<LoginInfo>((observer: Observer<LoginInfo>) => {
      this.http
        .post<LoginInfo>(this.API + this.LOGIN, loginRequest)
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }
}
