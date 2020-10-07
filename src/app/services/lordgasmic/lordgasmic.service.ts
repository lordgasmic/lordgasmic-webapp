import { Injectable } from '@angular/core';
import { Expression } from '../../models/Expression';
import { HttpClient } from '@angular/common/http';
import { FeedRequest } from '../../models/FeedRequest';
import { FeedResponse } from '../../models/FeedResponse';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LordgasmicService {
  private readonly ADDY = 'https://lordgasmic.com/api';

  constructor(private http: HttpClient) {}

  // getExpressions(): Expression[] {
  getExpressions(): void {
    this.http
      .get<Expression[]>(this.ADDY + '/v1/expressions')
      .subscribe((expressions) => console.log(expressions));
  }

  putFeed(feed: FeedRequest): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      this.http.put(this.ADDY + '/v2/feed', feed).subscribe(
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
      this.http.get<FeedResponse[]>(this.ADDY + '/v1/feeds').subscribe(
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
}
