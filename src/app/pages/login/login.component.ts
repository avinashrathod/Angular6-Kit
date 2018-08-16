import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    console.log("loginForm value==",loginForm.value);
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
