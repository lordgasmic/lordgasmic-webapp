import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginInterceptorService implements HttpInterceptor {
  private readonly LOGIN_HEADER = 'Login-Header';

  constructor(private window: Window) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.has(this.LOGIN_HEADER)) {
      this.window.location.href = req.headers.get(this.LOGIN_HEADER);
      return of(undefined);
    }
    return next.handle(req);
  }
}
