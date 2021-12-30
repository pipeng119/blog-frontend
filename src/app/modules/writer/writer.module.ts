import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';

import { WriterRoutingModule } from './writer-routing.module';
import { WriterComponent } from './writer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WriterComponent
  ],
  imports: [
    EditorModule,
    WriterRoutingModule,
    SharedModule
  ]
})
export class WriterModule { }
