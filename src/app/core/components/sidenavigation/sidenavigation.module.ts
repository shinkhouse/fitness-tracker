import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavigationComponent } from './sidenavigation.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../modules/shared/shared.module';



@NgModule({
  declarations: [
    SidenavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    SidenavigationComponent
  ]
})
export class SidenavigationModule { }
