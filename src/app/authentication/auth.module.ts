import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule
  ]
})
export class AuthModule { }
