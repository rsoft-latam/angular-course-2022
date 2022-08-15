import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  public data$ = of("hola");

  constructor() {
    this.data$.pipe(map(d => d + "-map")).subscribe(res => {
      console.log('soy suscriptor:', res)
    })
  }


}
