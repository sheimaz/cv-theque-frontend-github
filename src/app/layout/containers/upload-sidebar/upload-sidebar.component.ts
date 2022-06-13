import { Component, Input, OnInit } from '@angular/core';


import { faFile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-upload-sidebar',
  templateUrl: './upload-sidebar.component.html',
  styleUrls: ['./upload-sidebar.component.css']
})
export class UploadSidebarComponent implements OnInit {
  faFile = faFile;
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
