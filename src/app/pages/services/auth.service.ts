import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.auth.apiBaseUrl;
  private apiKey = environment.auth.apiKey;

  constructor(private http: HttpClient) {
  }

  login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.apiKey}`, body)
  }

  createUser(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.apiKey}`, body)
  }

}
