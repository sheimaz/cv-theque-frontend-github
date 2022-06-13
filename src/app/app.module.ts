import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

//Other Modules
import { SharedModule } from './shared/shared.module';
import { CvModule } from './cv/cv.module';
import { UsersModule } from './users/users.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './authentication/auth.module';
import { ProjectDisplayComponent } from './projects/components/project-display/project-display.component';
import { ProjectSidebarComponent } from './projects/components/project-sidebar/project-sidebar.component';
import { ProjectCardComponent } from './projects/components/project-card/project-card.component';
import { ProjectAddComponent } from './projects/container/project-add/project-add.component';
import { ProjectInfoComponent } from './projects/components/project-info/project-info.component';
import { ProjectFormComponent } from './projects/components/project-form/project-form.component';
import { ProjectTeamComponent } from './projects/components/project-team/project-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDisplayComponent,
    ProjectSidebarComponent,
    ProjectCardComponent,
    ProjectAddComponent,
    ProjectInfoComponent,
    ProjectFormComponent,
    ProjectTeamComponent,
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
