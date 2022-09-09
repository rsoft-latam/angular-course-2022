import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<any> {
    return this.http.get(`${this.url}/cars.json`);
  }

}
