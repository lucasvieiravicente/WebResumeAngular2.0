import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StackResponse } from 'src/app/models/StackResponse';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { KnowledgeCardComponent } from '../knowledge-card/knowledge-card.component';

@Component({
  selector: 'app-stack-panel',
  templateUrl: './stack-panel.component.html',
  styleUrls: ['./stack-panel.component.scss']
})

export class StackPanelComponent implements OnInit {
  
  @Input() stack!: StackResponse;
  @ViewChild(KnowledgeCardComponent) knowledgeComponent!: KnowledgeCardComponent;
  panelOpenState = false;

  constructor(private services: ApiServicesService) { }
  ngOnInit(): void {
    this.services.getKnowledgeByStackId(this.stack.stackId).subscribe(knowledges => this.knowledgeComponent.knowledges = knowledges);
  }
}
