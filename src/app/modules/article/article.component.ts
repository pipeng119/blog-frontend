import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articleList: Article[] = []

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList() {
    this.articleService.getArticle().subscribe(res => {
      this.articleList = res.data;
    })
  }

}
