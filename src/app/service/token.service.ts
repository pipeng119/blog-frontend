import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TLogin } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  get access_token(): string {
    return this._token ? this._token : localStorage.getItem('access_token') || '';
  }

  private _token!: string;

  constructor() { }

  setToken(loginInfo: TLogin): Observable<boolean> {
    if (loginInfo) {
      this._token = loginInfo.token;
      localStorage.setItem('access_token', loginInfo.token);
      return of(true);
    };
    return of(false);
  }

  check(): boolean {
    return !!localStorage.getItem('access_token');
  }

  clear(): void {
    this._token = '';
    localStorage.removeItem('access_token')
  }
}
