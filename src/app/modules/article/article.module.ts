import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ArticleComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }
