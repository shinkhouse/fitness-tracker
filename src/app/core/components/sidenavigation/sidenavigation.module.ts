import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavigationComponent } from './sidenavigation.component';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule, 
    RouterModule
  ],
  exports: [
    SidenavigationComponent
  ]
})
export class SidenavigationModule { }
