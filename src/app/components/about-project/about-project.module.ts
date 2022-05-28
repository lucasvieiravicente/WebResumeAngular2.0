import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProjectComponent } from './about-project.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AboutProjectComponent],
  exports: [AboutProjectComponent],
  imports: [
    CommonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatExpansionModule
  ]
})
export class AboutProjectModule { }
