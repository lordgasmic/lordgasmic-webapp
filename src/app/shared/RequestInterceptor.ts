import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebappConstants } from '../configuration/WebappConstants';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      headers: req.headers.set(WebappConstants.LORDGASMIC_AUTH_TOKEN, localStorage.getItem(WebappConstants.LORDGASMIC_AUTH_TOKEN))
    });
    return next.handle(newRequest);
  }
}
