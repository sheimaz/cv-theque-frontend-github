//ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//OTHER MODULES 
import { ChartsModule } from 'ng2-charts';

//IMPORTED MODULES
import { SharedModule } from '../shared/shared.module';

//COMPONENTS DECLARATIONS
import { CvSkillsComponent } from './cv-builder/containers/cv-skills/cv-skills.component';
import { CvUserComponent } from './cv-builder/components/cv-user/cv-user.component';
import { CvRatingComponent } from './cv-builder/components/cv-rating/cv-rating.component';
import { CvChipsComponent } from './cv-builder/components/cv-chips/cv-chips.component';
import { CvLangComponent } from './cv-builder/components/cv-lang/cv-lang.component';
import { CvAboutComponent } from './cv-builder/components/cv-about/cv-about.component';
import { CvProfessionalComponent } from './cv-builder/components/cv-professional/cv-professional.component';
import { CvCertificationComponent } from './cv-builder/components/cv-certification/cv-certification.component';
import { CvPsychoComponent } from './cv-builder/containers/cv-psycho/cv-psycho.component';
import { CvComponent } from './cv-list/cv.component';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';
import { LayoutModule } from '../layout/layout.module';





const cvModule : any [] = [
  CvBuilderComponent,
  CvSkillsComponent,
  CvUserComponent,
  CvRatingComponent,
  CvChipsComponent,
  CvLangComponent,
  CvAboutComponent,
  CvProfessionalComponent,
  CvCertificationComponent,
  CvPsychoComponent,
  CvComponent,

]

@NgModule({
  declarations:cvModule,
  imports: [
    SharedModule,
    CommonModule,
    ChartsModule,
    LayoutModule
  ]
})
export class CvModule { }
