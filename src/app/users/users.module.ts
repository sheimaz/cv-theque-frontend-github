import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';




@NgModule({
  declarations: [
    UsersComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule
  ]
})
export class UsersModule { }
