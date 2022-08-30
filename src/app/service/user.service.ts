import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUrlConfig, Res } from '../model/res';
import { TLogin, User } from '../model/user';
import { map, pluck, tap } from 'rxjs/operators'
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject('URL_CONFIG') private urlConfig: IUrlConfig,
    private tokenService: TokenService,
    private http: HttpClient) { }

  public login(userInfo: User) {
    return this.http.post<Res<TLogin>>(`${this.urlConfig.url}/auth/login`, userInfo)
      .pipe(
        pluck('data'),
        tap((loginInfo: TLogin) => this.tokenService.setToken(loginInfo)),
        map(() => this.tokenService.check())
      )
  }

  public resigter(userInfo: User): Observable<Res<Pick<User, 'username' | 'password'>>> {
    return this.http.post<Res<Pick<User, 'username' | 'password'>>>(`${this.urlConfig.url}/user`, userInfo);
  }

  public getAllUser(): Observable<Res<User[]>> {
    return this.http.get<Res<User[]>>(`${this.urlConfig.url}/user/list`);
  }
}
