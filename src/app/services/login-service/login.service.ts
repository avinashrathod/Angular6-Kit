import { Injectable } from '@angular/core';
import { RestService } from '../../services/rest-service/rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restService: RestService) {

  }

  /**
   * This method will authenticate user credentials
   */
  authenticateCredentials() {
    let url: string = "https://jsonplaceholder.typicode.com/posts/1";
    let data = {};
    return this.restService.getCall(data, url, false);
  }
}
