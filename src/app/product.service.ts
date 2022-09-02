import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = environment.app.apiUrlBase;

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Observable<any> {
    return this.http.get(
      `${this.url}/products.json`).pipe(
      map(s => Object.entries(s)),
      map(s => s.map(s => ({id: s[0], ...s[1]}))))
  }

  public createProduct(body: any): Observable<any> {
    return this.http.post(`${this.url}/products.json`, body)
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}/products/${id}.json`)
  }

  public updateProduct(id: any, body: any): Observable<any> {
    return this.http.put(`${this.url}/products/${id}.json`, body)
  }

}
