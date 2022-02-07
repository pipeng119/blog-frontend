import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '../article.component.scss']
})
export class AdminComponent implements OnInit {

  public articleList: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private modal: NzModalService,
    private message: NzMessageService
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

  showConfirm(id: string): void {
    this.modal.confirm({
      nzTitle: '删除文章',
      nzContent: '您是否确定删除',
      nzOnOk: () => this.deleteArticle(id)
    });
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe(res => {
      this.articleList = this.articleList.filter(item => item.article_id !== id);
      this.message.success(res.message)
    })
  }
}
