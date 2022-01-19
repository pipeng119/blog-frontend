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

  public getArticleList(): Observable<Res<Article[]>> {
    return this.http.get<Res<Article[]>>(`${this.urlConfig.url}/article`);
  }

  public createArticle(req: Article): Observable<Res<boolean>> {
    return this.http.post<Res<boolean>>(`${this.urlConfig.url}/article`, req);
  }

  public getArticle(id: string) {
    return this.http.get<Res<Article>>(`${this.urlConfig.url}/article/${id}`);
  }
}
