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

  constructor(
    @Inject('URL_CONFIG') private urlConfig: IUrlConfig,
    private http: HttpClient) { }

  public login(): Observable<Res<User>> {
    return this.http.get<Res<User>>(`${this.urlConfig.url}/user`);
  }
}
