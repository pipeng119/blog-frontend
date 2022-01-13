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
import { catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router, private message: NzMessageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.tokenService.access_token) {
      return next
        .handle(
          request.clone({
            headers: request.headers.append('token', this.tokenService.access_token),
            withCredentials: true,
          })
        ).pipe(
          catchError(this.errorHandler.bind(this))
        );
    };
    return next.handle(request).pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.tokenService.clear();
      this.message.create('error', `请重新登录`, { nzDuration: 1000 })
        .onClose!
        .pipe(
          mergeMap(
            () => this.router.navigateByUrl('/sign_in'))
        ).subscribe()
    }
    return throwError(error);
  }
}
