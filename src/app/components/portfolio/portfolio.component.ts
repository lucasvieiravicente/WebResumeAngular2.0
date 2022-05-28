import { Component } from '@angular/core';
import { StackResponse } from 'src/app/models/StackResponse';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public stacks!: StackResponse[];
  public loading = true;

  constructor(private services: ApiServicesService) { 
    this.services.getAllStacks().subscribe(stacks => this.stacks = stacks);
  }
}
