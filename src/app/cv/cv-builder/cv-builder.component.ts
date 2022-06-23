import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.css'],
})
export class CvBuilderComponent implements OnInit {
  editable: boolean = false;
  name: String = 'Shaima';
  job: String = 'Full Stack Developer';
  experience: String = 5 + ' years of experience';
  skillFirstSection: String = 'Dev';
  skillSecondSection: String = 'Data Base';
  mainSkills: string[] = ['Angular', 'Node', 'Spring Boot', 'My SQL'];
  allSkills: string[] = [
    'Html',
    'Angular',
    'React',
    'Node',
    'My SQL',
    'Spring Boot',
    'Java/JEE',
    'Spring Security',
    'Spring Data',
    'Hibernate',
  ];
  lang_AR: String = 'Arabic';
  lang_FR: String = 'Francais';
  lang_AN: String = 'Anglais';
  about: String =
    'As a Senior Backend java developer, I worked on fascinating and challenging subjects around various technologies in the sectors: Banking & government, Telecommunications and mobile business applications. The 5 years of experience allowed me to acquire good skills in software system, architecture, team development, as well as knowing how to listen to stakeholders (CDP, Functional Consultant, BA, QA...) during the various stages of projects carried out with the Agile Scrum methodology and DevOps. ';
  certificationName : string = 'Certification of Professional Archievement in Data sciences (2016)';
  certificationDescription : string = 'Amazon web services '

  constructor() {}

  ngOnInit(): void {}
  editableHandler() {
    this.editable = !this.editable;
  }
}
