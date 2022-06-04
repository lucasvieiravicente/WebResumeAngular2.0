import { Component } from '@angular/core';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent {
  projects!: Readonly<Array<Project>>;
  repositories!: Readonly<Array<Repository>>;

  constructor() {
    this.CreateProjects();
    this.CreateRepositories();
  }

  private CreateProjects(): void {
    this.projects = [
      new Project(
        "Fatec Mauá Job Newsletter",
        "MVP de um TCC para a FATEC - Mauá e seus alunos registrar e divulgar as vagas de emprego e estágio de maneira mais prática (front-end).",
        "Página da aplicação",
        "https://fatecmauajobnewsletterfront.azurewebsites.net"
      ),
      new Project(
        "Fatec Mauá Job Newsletter API",
        "MVP de um TCC para a FATEC - Mauá e seus alunos registrar e divulgar as vagas de emprego e estágio de maneira mais prática (back-end).",
        "Swagger da API",
        "https://fatecmauajobnewsletter.azurewebsites.net/swagger"
      ),
      new Project(
        "API Knowledge",
        "API para retorno das informações da minha base de conhecimento para popular o projeto Web Resume (esta página).",
        "Swagger da API",
        "https://webapiknowledge.azurewebsites.net/swagger"
      ),
      new Project(
        "API Email Sender",
        "API para contato no meu e-mail pessoal a partir dos meus projetos (utilizada na aba de contato).",
        "https://webapiemail.azurewebsites.net/swagger",
        "Swagger da API"
      )
    ];
  }

  private CreateRepositories(): void {
    this.repositories = [
      new Repository("Desta página", "https://github.com/lucasvieiravicente/WebResumeAngular"),
      new Repository("Demais repositórios", "https://github.com/lucasvieiravicente")
    ];
  }
}

class Project {
  title: string;
  description: string;
  textButton: string;
  url: string;

  constructor(title: string, description: string, textButton: string, url: string) {
    this.title = title;
    this.description = description;
    this.textButton = textButton;
    this.url = url;
  }
}

class Repository {
  description: string;
  url: string;

  constructor(description: string, url: string) {
    this.description = description;
    this.url = url;
  }
}