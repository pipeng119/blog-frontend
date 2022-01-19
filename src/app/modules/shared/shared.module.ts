import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { HtmlFilterPipe } from 'src/app/core/pipe/html-filter.pipe';

const modules = [
  CommonModule,
  FormsModule,
  NzMenuModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzCheckboxModule,
  NzMessageModule,
  NzUploadModule,
  NzIconModule,
  NzAvatarModule,
  NzTypographyModule,
  FlexLayoutModule,
  NzModalModule
]


@NgModule({
  declarations: [HtmlFilterPipe],
  imports: [
    modules
  ],
  exports: [
    modules,
    HtmlFilterPipe
  ]
})
export class SharedModule { }
