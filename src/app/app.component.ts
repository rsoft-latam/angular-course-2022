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
    this.productService.getAllProducts()
      .subscribe(res => {
        console.log('RESPONSE GET: ', res)
      })

    this.productService.createProduct({
      description: 'soy la descripcion',
      imageUrl: 'soy la imagen',
      ownerId: 1,
      price: 20,
      title: 'Polera',
    }).subscribe(res => {
      console.log('RESPONSE POST: ', res)
    })

    this.productService.deleteProduct('p2').subscribe(res => {
      console.log('RESPONSE DELETE: ', res)
    })


    this.productService.updateProduct('p9', {
      description: 'modificado',
      imageUrl: 'modificadon',
      ownerId: 1000000,
      price: 20000000,
      title: 'modificado',
    }).subscribe(res => {
      console.log('RESPONSE UPDATE: ', res)
    })




  }


}
