import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarsComponent } from './containers/side-bars/side-bars.component';
import { HeaderComponent } from './containers/header/header.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SideBarsComponent,
    HeaderComponent,
    TitleSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],exports: [
    SideBarsComponent,
    HeaderComponent,
    TitleSectionComponent,
  ]
})
export class LayoutModule { }
