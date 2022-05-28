import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FooterWarningComponent } from './footer-warning.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FooterWarningComponent],
  exports:[FooterWarningComponent],
  providers: [CookieService],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class FooterWarningModule { }
