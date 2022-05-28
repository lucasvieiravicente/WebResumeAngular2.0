import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPanelComponent } from './stack-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion'
import { KnowledgeCardModule } from '../knowledge-card/knowledge-card.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatExpansionModule,
    KnowledgeCardModule
  ],
  declarations: [StackPanelComponent],
  exports: [StackPanelComponent]
})
export class StackPanelModule { }
