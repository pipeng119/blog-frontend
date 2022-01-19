import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '../article.component.scss']
})
export class AdminComponent implements OnInit {

  public articleList: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList() {
    let param = this.activatedRoute.snapshot.url[0]?.path;
    this.articleService.getArticleList(param).subscribe(res => {
      this.articleList = res.data;
    })
  }
}
