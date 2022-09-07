import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "./utils/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<any> {
    return this.http.get(`https://league-of-legends-upb-default-rtdb.firebaseio.com/cars.json`);
  }

  createCar(body: any): Observable<any> {
    return this.http.post(`https://league-of-legends-upb-default-rtdb.firebaseio.com/cars.json`, body)
  }

  updateCar(id: string, body: ICar): Observable<any> {
    return this.http.put(`https://league-of-legends-upb-default-rtdb.firebaseio.com/cars/${id}.json`, body)
  }

  deleteCar(id: string): Observable<any> {
    return this.http.delete(`https://league-of-legends-upb-default-rtdb.firebaseio.com/cars/${id}.json`)
  }

}
