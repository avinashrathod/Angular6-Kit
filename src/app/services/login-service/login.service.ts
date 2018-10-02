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
  authenticateCredentials(data: {}) {
    let url: string = "https://reqres.in/api/login";
    let isSkipAuth: boolean = true;
    return this.restService.getCall(url, data, isSkipAuth);
  }
}
