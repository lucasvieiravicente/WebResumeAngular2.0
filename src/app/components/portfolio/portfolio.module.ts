import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StackPanelModule } from '../stack-panel/stack-panel.module';

@NgModule({
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    StackPanelModule
  ]
})

export class PortfolioModule { }
