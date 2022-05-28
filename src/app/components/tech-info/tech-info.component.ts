import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KnowledgeResponse } from 'src/app/models/knowledgeResponse';

@Component({
  selector: 'app-tech-info',
  templateUrl: './tech-info.component.html',
  styleUrls: ['./tech-info.component.scss']
})

@Injectable()
export class TechInfoComponent {

  public widthWindow!: string;

  constructor(
    private dialog: MatDialog,
    private breakPointObserver: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: KnowledgeResponse) {  
      
    this.breakPointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,        
      Breakpoints.Medium
    ]).subscribe(result => {
      this.widthWindow = result.matches ? '40%' : '85%'
    });
  }

  openDialog(): void {
    this.dialog.open(TechInfoComponent, {
      width: this.widthWindow,
      data: {
        title: this.data.title,
        firstDescription: this.data.firstDescription,
        secondDescription: this.data.secondDescription
      }
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  getSearchUrl(): string { 
    return 'https://www.google.com/search?q=' + encodeURIComponent(this.data.title);
  }

}
