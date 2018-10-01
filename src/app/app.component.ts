import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isTabs: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if ((this.router.url === "/login") || (this.router.url === "/signup")) {
        this.isTabs = false;
      } else {
        this.isTabs = true;
      }
    });
  }
}
