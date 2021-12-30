import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'article'
      },
      {
        path: 'article',
        loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)
      }
    ]
  },
  {
    path: 'sign_in',
    component: LoginComponent
  },
  {
    path: 'sign_up',
    component: RegisterComponent
  },
  {
    path: 'writer',
    loadChildren: () => import('./modules/writer/writer.module').then(m => m.WriterModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
