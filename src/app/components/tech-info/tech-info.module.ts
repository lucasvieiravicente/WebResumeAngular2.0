import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TechInfoComponent } from './tech-info.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [TechInfoComponent],
  exports: [TechInfoComponent],
  providers: [TechInfoComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class TechInfoModule { }
