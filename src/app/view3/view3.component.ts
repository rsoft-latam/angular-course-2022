import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css'],
})
export class View3Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('query params: ', params);
    });


    console.log('snapshop: ', this.activatedRoute.snapshot.queryParams)
  }
}
