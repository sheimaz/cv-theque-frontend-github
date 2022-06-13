import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarsComponent } from './containers/side-bars/side-bars.component';
import { HeaderComponent } from './containers/header/header.component';
import { TitleSectionComponent } from './containers/title-section/title-section.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersBarComponent } from './containers/filters-bar/filters-bar.component';
import { PsyFilterComponent } from './components/psy-filter/psy-filter.component';
import { DepartementFilterComponent } from './components/departement-filter/departement-filter.component';
import { TechFilterComponent } from './components/tech-filter/tech-filter.component';
import { UploadSidebarComponent } from './containers/upload-sidebar/upload-sidebar.component';
import { RoleFilterComponent } from './components/role-filter/role-filter.component';



@NgModule({
  declarations: [
    SideBarsComponent,
    HeaderComponent,
    TitleSectionComponent,
    FiltersBarComponent,
    PsyFilterComponent,
    DepartementFilterComponent,
    TechFilterComponent,
    UploadSidebarComponent,
    RoleFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],exports: [
    SideBarsComponent,
    HeaderComponent,
    TitleSectionComponent,
    FiltersBarComponent,
    UploadSidebarComponent,
  ]
})
export class LayoutModule { }
