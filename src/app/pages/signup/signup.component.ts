import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      mobile: new FormControl(''),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
        country: new FormControl('')
      })
    });
  }

  onSignup() {
    console.log("onSignup signupForm value->",this.signupForm.value)
  }

}
