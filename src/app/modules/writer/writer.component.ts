import { Article } from './../../model/article';
import { ArticleService } from './../../service/article.service';
import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {

  public editorContent = '';

  public editorConfig = {
    // selector: '#article-editor',
    // plugins是tinymce的各种插件
    // plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu codesample autosize',
    plugins: 'link lists image paste media code table wordcount codesample',
    // 语言包可以使用tinymce提供的网址,但是墙的原因,会连不上/网速慢,所以还是自行下载,下载地址:https://www.tiny.cloud/get-tiny/language-packages/
    language_url: 'assets/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    images_upload_handler: (blobInfo: any, success: any, failure: any) => {
      console.log(blobInfo.blob())
      // blobInfo.blob()为file, blobInfo.blob().name为文件名称,调用成功后需要回调success(文件名称),向页面传递图片信息,如果失败了需要回调failure(失败信息)
      console.log('上传图片啦');
    },
    paste_data_images: true,
    // toolbar定义快捷栏的操作, | 用来分隔显示
    toolbar: 'image | codesample | bullist numlist | bold italic underline strikethrough | alignleft'
      + ' aligncenter alignright alignjustify | undo redo',
    // 这里是代码块的一些语言选择,好像暂时还没支持typescript
    codesample_languages: [
      { text: 'Python', value: 'python' },
      { text: 'HTML/XML', value: 'markup' },
      { text: 'JavaScript', value: 'javascript' },
      { text: 'CSS', value: 'css' },
      { text: 'Java', value: 'java' }
    ],
    // 最小高度
    min_height: 550,
    // 最大高度
    max_height: 650
  }

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }


  contentInfo(): void {
    if (this.editorContent) {
      console.log('this.editorContent: ', this.editorContent);
      // let req:Article = {
      //   content: this.editorContent
      // }
      // this.articleService.createArticle()
    }
  }

}
