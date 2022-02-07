import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articleList: Article[] = []

  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList() {
    this.articleService.getArticleList().subscribe(res => {
      this.articleList = res.data;
    })
  }
}
