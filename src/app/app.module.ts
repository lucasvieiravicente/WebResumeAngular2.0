import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MastheadModule } from './components/masthead/masthead.module';
import { AboutModule } from './components/about/about.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutProjectModule } from './components/about-project/about-project.module';
import { ContactModule } from './components/contact/contact.module';
import { FooterModule } from './components/footer/footer.module';
import { RouterModule } from '@angular/router';
import { FooterWarningModule } from './components/footer-warning/footer-warning.module';
import { StackPanelModule } from './components/stack-panel/stack-panel.module';
import { EducationModule } from './components/education/education.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule, 
    HeaderModule,
    MastheadModule,
    AboutModule,
    PortfolioModule,
    AboutProjectModule,
    ContactModule,
    FooterModule,
    FooterWarningModule,
    StackPanelModule,
    EducationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
