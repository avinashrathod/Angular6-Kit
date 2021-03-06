import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';


import { LoginService } from '../../services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    console.log("loginForm value==", loginForm.value);
    this.loginService.authenticateCredentials(loginForm.value)
      .subscribe(res => {
        console.log("LoginComponent login success ", res);
        this.router.navigate(["/home"]);
      }, (err) => {
        if (err != null) {
          console.log("LoginComponent login err ", err);
        }
      });
  }

}
