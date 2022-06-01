//ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

//ANGULAR MATERIAL MODULES
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import { AppRoutingModule } from '../app-routing.module';



const MatModules: any[] = [
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatChipsModule,
  MatCardModule,
  MatDividerModule,
  MatSidenavModule,
  MatSliderModule,
  MatGridListModule,
  MatStepperModule,
]

const sharedModule : any [] = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  ...MatModules
]

@NgModule({
  declarations: [],
  imports:sharedModule,
  exports : [
    ...sharedModule
  ]
})
export class SharedModule { }
