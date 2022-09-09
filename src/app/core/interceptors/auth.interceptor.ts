import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../../pages/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      let params = new HttpParams();
      params = params.append('auth', token);
      request = request.clone({
        url: request.url,
        params: params,
        /*setHeaders: {
          Authorization: `Bearer ${token}`,
        },*/
      })
    }


    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.handler401Error();
        }
        return throwError('ERROR')
      })
    );
  }

  private handler401Error() {
    this.authService.logout();
    return throwError('ERROR 401');
  }


}
