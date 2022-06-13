import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  selectedTab:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onchangeTab(){
    this.selectedTab=1;
  }

}
