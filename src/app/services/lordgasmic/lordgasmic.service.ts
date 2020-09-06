import { Injectable } from '@angular/core';
import {Expression} from '../../models/Expression';
import {HttpClient} from '@angular/common/http';
import {Feed} from '../../models/Feed';

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

  putFeed(feed: Feed): void {
    this.http.put(this.ADDY + '/v1/feed', feed)
      .subscribe(response => {
      console.log(response);
    });
  }
}
