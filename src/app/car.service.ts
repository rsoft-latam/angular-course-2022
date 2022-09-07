import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "./utils/car.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<any> {
    return this.http.get(`${this.url}/cars.json`);
  }

  createCar(body: any): Observable<any> {
    return this.http.post(`${this.url}/cars.json`, body)
  }

  updateCar(id: string, body: ICar): Observable<any> {
    return this.http.put(`https://${this.url}/cars/${id}.json`, body)
  }

  deleteCar(id: string): Observable<any> {
    return this.http.delete(`${this.url}/cars/${id}.json`)
  }

}
