import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUrlConfig, Res } from '../model/res';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public get isNotLogin(): boolean {
    return !document.cookie;
  }

  constructor(
    @Inject('URL_CONFIG') private urlConfig: IUrlConfig,
    private http: HttpClient) { }

  public login(userInfo: User): Observable<Res<User>> {
    return this.http.post<Res<User>>(`${this.urlConfig.url}/auth/login`, userInfo);
  }

  public resigter(userInfo: User): Observable<Res<Pick<User, 'username' | 'password'>>> {
    return this.http.post<Res<Pick<User, 'username' | 'password'>>>(`${this.urlConfig.url}/user`, userInfo);
  }
}
