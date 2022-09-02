import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res => {
      console.log('RESPONSE: ', res)
    })
  }


}
