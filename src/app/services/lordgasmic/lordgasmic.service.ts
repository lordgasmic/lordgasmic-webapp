import { Injectable } from '@angular/core';
import {Expression} from '../../models/Expression';
import {HttpClient} from '@angular/common/http';
import {Feed} from '../../models/Feed';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LordgasmicService {

  private readonly ADDY = 'https://lordgasmic.com/api';

  constructor(private http: HttpClient) { }

  // getExpressions(): Expression[] {
  getExpressions(): void {
    this.http.get<Expression[]>(this.ADDY + '/v1/expressions')
      .subscribe(expressions =>  console.log(expressions));
  }

  putFeed(feed: Feed): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      this.http
        .put(this.ADDY + '/v1/feed', feed)
        .subscribe(() => {
          observer.next();
          observer.complete();
        },
        err => {
          observer.error(err);
        }
      );
    });
  }
}
