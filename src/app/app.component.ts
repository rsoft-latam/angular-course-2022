import { Component } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  public data$ = of('hola');

  public youtube$ = new BehaviorSubject<number>(0);
  public tiktok$ = new BehaviorSubject<number>(0);
  public twitter$ = new BehaviorSubject<number>(0);
  
  public person1!: Subscription;
  public person2!: Subscription;

  constructor() {
    this.data$.pipe(map((d) => d + '-map')).subscribe((res) => {
      console.log('soy suscriptor:', res);
    });

    this.youtube$.subscribe((res) => {
      console.log('youtube suscriptcion:', res);
    });

    this.person1 = this.tiktok$.subscribe((res) => {
      console.log('person1 tiktok suscriptcion:', res);
    });

    this.person2 = this.tiktok$.subscribe((res) => {
      console.log('person2 tiktok suscriptcion:', res);
    });

    this.twitter$.subscribe((res) => {
      console.log('twitter suscriptcion:', res);
    });
  }

  addVideo() {
    this.youtube$.next(1);
  }

  addTiktok() {
    this.tiktok$.next(2);
  }

  addTuit() {
    this.twitter$.next(3);
  }

  deleteTiktok() {
    this.person1.unsubscribe();
  }

}
