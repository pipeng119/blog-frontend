import { ArticleService } from './../../service/article.service';
import { Article } from './../../model/article';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public articleList!: Article[];

  constructor(private router: Router, public userService: UserService, public articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  public getArticleList() {
    this.articleService.getAll().subscribe(res => {
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

  public write(): void {
    this.router.navigate(['writer']);
  }

}
