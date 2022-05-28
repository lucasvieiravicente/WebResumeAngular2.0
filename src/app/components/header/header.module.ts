import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle'

@NgModule({
  exports: [HeaderComponent],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonToggleModule
  ]
})
export class HeaderModule { }
