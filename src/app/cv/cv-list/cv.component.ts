import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
   title: any;
   description: any;



  constructor() { }

  ngOnInit(): void {
  }
  onCancel() {

  }

  create() {
   console.log({title: this.title, description: this.description});
  
  }

}
