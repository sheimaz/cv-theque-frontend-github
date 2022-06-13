import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {
  title: any;
  description: any;



 constructor(public MatDialogRef: MatDialogRef<ProjectDisplayComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) { }

 ngOnInit(): void {
 }
 onCancel() {
   this.MatDialogRef.close();
 }

 create() {
   this.MatDialogRef.close({title: this.title, description: this.description});
 }

}