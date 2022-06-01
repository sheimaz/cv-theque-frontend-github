import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SideBarsComponent } from './layout/containers/side-bars/side-bars.component';
import { HeaderComponent } from './layout/containers/header/header.component';
import { TitleSectionComponent } from './layout/components/title-section/title-section.component';

//Other Modules
import { SharedModule } from './shared/shared.module';
import { CvModule } from './cv/cv.module';
import { UsersModule } from './users/users.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './authentication/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    CvModule,
    UsersModule,
    LayoutModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
