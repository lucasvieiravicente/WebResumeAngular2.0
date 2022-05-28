import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EducationComponent],
  exports: [EducationComponent]
})
export class EducationModule { }
