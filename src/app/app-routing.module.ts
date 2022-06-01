import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvBuilderComponent } from './cv/cv-builder/cv-builder.component';


import {HomeComponent} from './home/home.component';

import { ProjectsComponent } from './projects/projects.component';
import {RegisterComponent} from './users/register/register.component';
import { UsersComponent } from './users/users/users.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CvBuilderComponent
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: 'users',
    component: UsersComponent

  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }