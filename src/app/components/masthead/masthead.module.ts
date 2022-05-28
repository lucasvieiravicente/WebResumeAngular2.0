import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastheadComponent } from './masthead.component';



@NgModule({
  declarations: [MastheadComponent],
  exports: [MastheadComponent],
  imports: [
    CommonModule
  ]
})
export class MastheadModule { }
