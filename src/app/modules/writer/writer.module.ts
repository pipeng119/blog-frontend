import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriterRoutingModule } from './writer-routing.module';
import { WriterComponent } from './writer.component';


@NgModule({
  declarations: [
    WriterComponent
  ],
  imports: [
    CommonModule,
    WriterRoutingModule
  ]
})
export class WriterModule { }
