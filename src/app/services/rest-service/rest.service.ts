import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * This service will be used to call REST API calls
 */
export class RestService {

  constructor(private httpClient: HttpClient) {

  }

  private mapResponse(res: Response) {
    let body = res;
    return body || {};
  }

  /**
   * This method will perform all get call of application
   */
  getCall(data: {}, url: string, isSkipAuth: boolean): Observable<any> {

    if (!isSkipAuth) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'my-auth-token'
        })
      };
    }

    return this.httpClient.get(url)
      .pipe(
        retry(2), // retry a failed request up to 2 times
      );
  }

  /**
   * This method will perform all post call of application
   */
  postCall(data: {}, url: string, isSkipAuth: boolean): Observable<any> {

    if (!isSkipAuth) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'my-auth-token'
        })
      };
    }

    return this.httpClient.post(url,data)
      .pipe(
        retry(2), // retry a failed request up to 2 times
      );
  }

  handleError(error) {
    console.log("handleError called");
  }
}
