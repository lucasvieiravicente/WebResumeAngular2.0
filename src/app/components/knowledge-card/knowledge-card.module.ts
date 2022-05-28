import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeCardComponent } from './knowledge-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  declarations: [KnowledgeCardComponent],
  exports: [KnowledgeCardComponent]
})
export class KnowledgeCardModule { }
