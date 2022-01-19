import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../model/article';
import { IUrlConfig, Res } from '../model/res';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    @Inject('URL_CONFIG') private urlConfig: IUrlConfig,
    private http: HttpClient) { }

  public getArticleList(param?: string): Observable<Res<Article[]>> {
    let url = param === 'admin' ? `${this.urlConfig.url}/article/all?key=${param}` : `${this.urlConfig.url}/article/all`;
    return this.http.get<Res<Article[]>>(url);
  }

  public createArticle(req: Article): Observable<Res<boolean>> {
    return this.http.post<Res<boolean>>(`${this.urlConfig.url}/article`, req);
  }

  public deleteArticle(id: string): Observable<Res<boolean>> {
    return this.http.delete<Res<boolean>>(`${this.urlConfig.url}/article/${id}`);
  }

  public getArticle(id: string) {
    return this.http.get<Res<Article>>(`${this.urlConfig.url}/article/${id}`);
  }
}
