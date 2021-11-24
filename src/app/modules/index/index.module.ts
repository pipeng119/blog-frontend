import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    IndexRoutingModule,
    NzButtonModule
  ]
})
export class IndexModule { }
