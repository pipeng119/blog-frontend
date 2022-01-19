import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  articleId!: string;
  article!: Article;

  constructor(
    private artcileService: ArticleService,
    private activeRoute: ActivatedRoute
  ) {
    this.articleId = this.activeRoute.snapshot.params.id || '';
  }

  ngOnInit(): void {
    this.artcileService.getArticle(this.articleId).subscribe(res => {
      this.article = res.data;
    })
  }

}
