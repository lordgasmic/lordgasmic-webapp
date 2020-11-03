import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class LoginInterceptor implements HttpInterceptor {
  private readonly LOGIN_HEADER = 'Login-Header';

  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.has(this.LOGIN_HEADER)) {
      this.router.navigate("/login");
      return of(undefined);
    }
    return next.handle(req);
  }
}
