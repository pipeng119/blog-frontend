import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    ArticleComponent,
    DetailComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }
