import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.css']
})
export class ProjectTeamComponent implements OnInit {
  selectedProfile:boolean = false;
  @Input() Name:String= '';
  @Input() Job:String= '';
  @Input() Email:String= '';



  constructor() {
   }

  ngOnInit(): void {
  }

}
