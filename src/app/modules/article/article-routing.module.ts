import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ArticleComponent, },
  { path: 'admin', component: AdminComponent, },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
