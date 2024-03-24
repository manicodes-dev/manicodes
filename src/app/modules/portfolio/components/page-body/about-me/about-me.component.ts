import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  // public skills = ['HTML','CSS','JavaScript','Angular','Java','Spring Boot','SASS','GIT','Github','Bitbucker','MySQL']
  
  skills = [
    {
      name:'HTML',
      icon:'html.svg'
    },
    {
      name:'CSS',
      icon:'css.svg'
    },
    {
      name:'JavaScript',
      icon:'javascript.svg'
    },
    {
      name:'Angular',
      icon:'angular.svg'
    },
    {
      name:'Java',
      icon:'java.svg'
    },
    {
      name:'Spring Boot',
      icon:'spring.svg'
    },
    {
      name:'SASS',
      icon:'sass.svg'
    },
    {
      name:'GIT',
      icon:'git.svg'
    },
    {
      name:'GitHub',
      icon:'github.svg'
    },
    {
      name:'Bitbucket',
      icon:'bitbucket.svg'
    },
    {
      name:'MySQL',
      icon:'mysql.svg'
    },
    {
      name:'React',
      icon:'react.svg'
    },
    {
      name:'Node JS',
      icon:'nodejs.svg'
    },
    {
      name:'Firebase',
      icon:'firebase.svg'
    },
    {
      name:'MongoDB',
      icon:'mongodb.svg'
    },
    {
      name:'Express JS',
      icon:'express.svg'
    },
    {
      name:'AWS',
      icon:'aws.svg'
    },
    {
      name:'JQuery',
      icon:'jquery.svg'
    },
    {
      name:'Bootstrap',
      icon:'bootstrap.svg'
    },
    {
      name:'Tailwind',
      icon:'tailwind.svg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
