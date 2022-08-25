import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  id: number = 1;

  constructor(private router: Router) {}

  goView1() {
    this.router.navigate(['view1', this.id]);
  }

  goView2() {
    this.router.navigate(['view2', this.id, 'listNames', this.id]);
  }
}
