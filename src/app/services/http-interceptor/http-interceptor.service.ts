import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  // intercept request 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Handle response of request
    return next.handle(request)
      .pipe(
        tap(event => {
          // All http request success response will pass from this
          if (event instanceof HttpResponse) {
            // http response success status code
            // console.log(event.status);
          }
        }, error => {
          // All http request error response will pass from this
          console.log("----Http interceptor response error, no processing done----");
        })
      )
  };
}
