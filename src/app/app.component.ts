import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test'; 

  products$ = new BehaviorSubject([
    {nombre: "polera", talla: 13, stock: 12, tipo: "calor"},
    {nombre: "camisa", talla : 54, stock: 22, tipo: "frio"},
    {nombre: "jeans", talla : 78, stock: 0, tipo: "calor"},
    {nombre: "corto", talla : 90, stock: 44, tipo: "calor"},
    {nombre: "buso", talla : 56, stock: 0, tipo: "frio"},
    {nombre: "blusa", talla : 33, stock: 50, tipo: "frio"},
    {nombre: "chompa", talla : 10, stock: 5, tipo: "calor"},
    {nombre: "bozer", talla : 34, stock: 1, tipo: "frio"},
    {nombre: "blusa", talla : 5, stock: 2, tipo: "calor"},
    {nombre: "guantes", talla : 75, stock: 5, tipo: "calor"}
  ])

  
  constructor(){

  }

  ngOnInit(){

  }

}
