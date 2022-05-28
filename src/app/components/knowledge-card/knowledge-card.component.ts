import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StackIds } from 'src/app/enums/StackIds';
import { KnowledgeResponse } from 'src/app/models/knowledgeResponse';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { TechInfoComponent } from '../tech-info/tech-info.component';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.scss']
})
export class KnowledgeCardComponent {

  knowledges!: KnowledgeResponse[];

  constructor(private sanitizer: DomSanitizer,
              private dialog: MatDialog,
              private breakpoint: BreakpointObserver)  { }

  getBase64AsImage(fileData: string[]): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${fileData}`);
  }

  getAltDescription(title: string): string {
    return `Logo image of ${title}`;
  }

  openInfo(index: number) {
    const techInfoComponent = new TechInfoComponent(this.dialog, this.breakpoint, this.knowledges[index])
    techInfoComponent.openDialog();
  }
}
