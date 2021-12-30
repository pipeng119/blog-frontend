import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const handler = () => {
      // if (request.url.includes('/auth/login')) {
      //   this.router.navigateByUrl('');
      // };
    };

    if (this.tokenService.access_token) {
      return next
        .handle(
          request.clone({
            headers: request.headers.append('token', this.tokenService.access_token),
            withCredentials: true,
          })
        )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.tokenService.clear();
            }
            return throwError(error);
          }),
          tap(() => handler())
        );
    };
    return next.handle(request).pipe(tap(() => handler()));
  }
}
