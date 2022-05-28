import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public navbarOpen = false;

  constructor(private breakPointObserver: BreakpointObserver) {  
      this.breakPointObserver.observe([
        Breakpoints.XLarge,
        Breakpoints.Large,        
        Breakpoints.Medium
      ]).subscribe(result => {
        this.navbarOpen = result.matches;
      });
   }

  scroll(elementId: string) {
    let position: number | undefined;
    
    if(elementId === 'top') {
      position = 150;
    } else {
      position = document.getElementById(elementId)?.offsetTop;
    }

    if(position)
      window.scrollTo({
        top: position - 100,
        behavior: 'smooth'
      });
  }
}
