import { ArticleListComponent } from './../../components/article-list/article-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent,
    ArticleListComponent
  ],
  imports: [
    IndexRoutingModule,
    SharedModule
  ]
})
export class IndexModule { }
