import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { IUrlConfig, Res } from '../model/res';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    @Inject('URL_CONFIG') private urlConfig: IUrlConfig,
    private http: HttpClient) { }

  public getAll(): Observable<Res<Article[]>> {
    return this.http.get<Res<Article[]>>(`${this.urlConfig.url}/article`);
  }
}
