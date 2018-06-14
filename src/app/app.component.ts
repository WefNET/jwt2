import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  go(route: string) {
    this.router.navigateByUrl(route);
  }
}


