import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    console.log("loginForm value==",loginForm.value);
    this.router.navigate(["/dashboard"]);
  }


  openModal(){

    
    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
    // .subscribe(
    //   (data) => {
    //     console.log("Data: ", data);
    //   },
    //   err => {
    //     console.log("Error occured.")
    //   }
    // )
  }

}
