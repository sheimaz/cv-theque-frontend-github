import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-project-sidebar',
  templateUrl: './project-sidebar.component.html',
  styleUrls: ['./project-sidebar.component.css']
})
export class ProjectSidebarComponent implements OnInit {

  @Input() pushStyle: boolean = false;
  title: any;
  description: any;



 constructor(){

 }
  
 ngOnInit(): void {
 }
 onCancel() {
  console.log({title: this.title, description: this.description});
 }

 create() {
   console.log({title: this.title, description: this.description});
 }
}
