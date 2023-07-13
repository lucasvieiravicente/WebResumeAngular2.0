import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  socialMedias!: Readonly<Array<SocialMedia>>;

  constructor() {
    this.createSocialMedias();
  }

  public getProfessionalTime(): number {
    return new Date().getFullYear() - 2019
  }

  public getExperienceTime(): number {
    return new Date().getFullYear() - 2016
  }

  private createSocialMedias(): void {
    this.socialMedias = [
      new SocialMedia("https://www.linkedin.com/in/lucas-vieira-vicente", "fab fa-linkedin-in"),
      new SocialMedia("https://github.com/lucasvieiravicente", "fab fa-github"),
      new SocialMedia("https://api.whatsapp.com/send?phone=5511983773017&text=Olá,%20tudo%20bem?%20Te%20encontrei%20no%20seu%20currículo%20online", "fab fa-whatsapp")
    ];
  }

}

class SocialMedia {
  url: string;
  icon: string;

  constructor(url: string, icon: string) {
    this.url = url;
    this.icon = icon;
  }
}
