import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-footer-warning',
  templateUrl: './footer-warning.component.html',
  styleUrls: ['./footer-warning.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ]
})
export class FooterWarningComponent implements OnInit {

  public hasCookie?: boolean;
  public message?: string;

  constructor(
    private cookieService: CookieService,
    private breakPointObserver: BreakpointObserver) {
      this.breakPointObserver.observe([
        Breakpoints.XLarge,
        Breakpoints.Large,        
        Breakpoints.Medium
      ]).subscribe(result => {
        this.getMessageFooter(result.matches);
      });
     }

  ngOnInit(): void {
    this.checkCookie();
  }

  setCookie(): void {
    if(!this.hasCookie) {
      this.cookieService.set('aboutCookieLucasVicente', 'IAccept', 1);
    } else {
      this.cookieService.delete('aboutCookieLucasVicente');
      this.cookieService.set('aboutCookieLucasVicente', 'IAccept', 1);
    }

    this.checkCookie();
  }

  checkCookie(): void {
    this.hasCookie = this.cookieService.check('aboutCookieLucasVicente');
  }

  getMessageFooter(matchResult: boolean): void {
    this.message = matchResult ? "clicar" : "pressionar";
  }
}
