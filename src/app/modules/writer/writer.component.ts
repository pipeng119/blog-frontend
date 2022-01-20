import { Article } from './../../model/article';
import { ArticleService } from './../../service/article.service';
import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

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

  constructor(private articleService: ArticleService, private message: NzMessageService, private route: Router) { }

  ngOnInit(): void {
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

  publishArticle(): void {
    if (this.article.title && this.article.content) {
      this.articleService.createArticle(this.article).subscribe(res => {
        if (res.data) {
          this.message.success('创建文章成功');
          this.route.navigateByUrl('/');
        }
      })
    }
  }

}
