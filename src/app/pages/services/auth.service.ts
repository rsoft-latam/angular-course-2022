import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.auth.apiBaseUrl;
  private apiKey = environment.auth.apiKey;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.apiKey}`, body).pipe(
      map((res: any) => {
        this.authSuccess(res.idToken, res.localId)
        return res
      })
    )
  }

  createUser(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.apiKey}`, body)
  }

  private authSuccess(token: string, userId: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId)
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['login'])
  }

}
