import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public getProfessionalTime(): number {
    return new Date().getFullYear() - 2017
  }

}
