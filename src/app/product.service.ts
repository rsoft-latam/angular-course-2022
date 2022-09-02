import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = environment.app.apiUrlBase;

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any>{
    return this.http.get( `${this.url}/products.json`)
  }

}
