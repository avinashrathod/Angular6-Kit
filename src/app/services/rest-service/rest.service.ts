import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * This service will be used to call REST API calls
 * Note: Using http-intercepter will may cause multiple error messages to avoid this remove retry of request
 * If you want to use retry then handle error in handleError function commonly
 */
export class RestService {

  constructor(private httpClient: HttpClient) {

  }

  private mapResponse(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    console.log("handleError called", error);
    if (error && (error.status == 401)) {
      console.log("Show unauthorized pop-up");
      return throwError(null);
    } else if (error && (error.status == 404) || (error.status == 0)) {
      console.log("Show server unavailable pop-up");
      return throwError(null);
    } else {
      // return an observable with a user-facing error message
      return throwError(error);
    }
  };

  /**
   * This method will perform all get call of application
   */
  getCall(url: string, data: {}, isSkipAuth: boolean): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if (!isSkipAuth) {
      httpOptions.headers =
        httpOptions.headers.set('Authorization', 'my-new-auth-token');
    }

    return this.httpClient.get(url, data)
      .pipe(
        retry(2), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  /**
   * This method will perform all post call of application
   */
  postCall(url: string, data: {}, isSkipAuth: boolean): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if (!isSkipAuth) {
      httpOptions.headers =
        httpOptions.headers.set('Authorization', 'my-new-auth-token');
    }

    return this.httpClient.post(url, data)
      .pipe(
        retry(2), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  /**
   * This method will perform all put call of application
   */
  putCall(url: string, data: {}, isSkipAuth: boolean): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if (!isSkipAuth) {
      httpOptions.headers =
        httpOptions.headers.set('Authorization', 'my-new-auth-token');
    }

    return this.httpClient.put(url, data)
      .pipe(
        retry(2), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  /**
   * This method will perform all delete call of application
   */
  deleteCall(url: string, id: number, isSkipAuth: boolean): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if (!isSkipAuth) {
      httpOptions.headers =
        httpOptions.headers.set('Authorization', 'my-new-auth-token');
    }

    return this.httpClient.delete(url + id)
      .pipe(
        retry(2), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
}
