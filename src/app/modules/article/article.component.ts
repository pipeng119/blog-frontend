import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, of } from 'rxjs';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articleList: Article[] = []

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList() {
    iif(
      () => this.activatedRoute.snapshot.url[0]?.path === 'admin',
      this.articleService.getArticleList(this.activatedRoute.snapshot.url[0]?.path),
      this.articleService.getArticleList()
    ).subscribe(res => {
      this.articleList = res.data;
    });
  }
}
