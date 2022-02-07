import { Article } from './../../model/article';
import { ArticleService } from './../../service/article.service';
import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {

  public article: Article = {
    title: '',
    content: ''
  }

  public get articleId() {
    return this.route.snapshot.params.id || '';
  }

  private cacheArticle!: Article;

  constructor(private articleService: ArticleService, private message: NzMessageService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.articleId) this.getArticleById();
  }

  onChange(event: any) { }
  onEditorChange(event: any) { }
  onReady(event: any) { }
  onFocus(event: any) { }
  onBlur(event: any) { }
  onContentDom(event: any) { }
  onFileUploadRequest(event: any) { }
  onFileUploadResponse(event: any) { }
  onPaste(event: any) { }
  onDrop(event: any) { }

  commit() {
    this.articleId ? this.update() : this.publish();
  }

  publish(): void {
    if (this.article.title && this.article.content) {
      this.articleService.createArticle(this.article).subscribe(res => {
        if (res.data) {
          this.message.success('创建文章成功');
          this.router.navigateByUrl('/');
        }
      })
    } else {
      this.message.error('请填写标题和内容!');
    }
  }

  update(): void {
    if (this.isChange()) {
      this.articleService.updateArticle(this.article)
        .subscribe(res => {
          this.message.success(res.message);
          this.router.navigateByUrl('');
        })
    }else{
      this.message.warning('文章标题或内容未发生改变!');
    }
  }

  private getArticleById(): void {
    this.articleService.getArticle(this.articleId).subscribe(res => {
      this.article = res.data;
      this.cacheArticle = JSON.parse(JSON.stringify(res.data));
    })
  }

  private isChange(): boolean {
    return this.cacheArticle.title !== this.article.title || this.cacheArticle.content !== this.article.content;
  }

}
