import { ArticleService } from './../../service/article.service';
import { Article } from './../../model/article';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public articleList!: Article[];

  loading = false;
  avatarUrl?: string;

  customReq = (item: any) => {
    const formData = new FormData();
    formData.append('avatar', item.file)
    const req = new HttpRequest("POST", '/api/article/upload', formData);

    return this.http.request(req).subscribe(res => {
      console.log(res)
    })
  };

  constructor(
    public tokenService: TokenService,
    private router: Router,
    public userService: UserService,
    public articleService: ArticleService,
    private msg: NzMessageService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  public getArticleList() {
    this.articleService.getArticle().subscribe(res => {
      if (res.code === 200) {
        this.articleList = res.data;
      }
    })
  }

  public login(): void {
    this.router.navigate(['/sign_in']);
  }

  public register(): void {
    this.router.navigateByUrl('sign_up');
  }

  public logout(): void {
    this.tokenService.clear();
    this.router.navigateByUrl('sign_in');
  }

  public write(): void {
    this.router.navigate(['writer']);
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }


  submit(event: any) {
    console.log('event: ', event);
  }
}
