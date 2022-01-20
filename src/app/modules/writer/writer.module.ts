import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';

import { WriterRoutingModule } from './writer-routing.module';
import { WriterComponent } from './writer.component';
import { SharedModule } from '../shared/shared.module';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    WriterComponent
  ],
  imports: [
    EditorModule,
    WriterRoutingModule,
    SharedModule,
    CKEditorModule
  ]
})
export class WriterModule { }
