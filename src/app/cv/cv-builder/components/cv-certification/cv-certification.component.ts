import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-certification',
  templateUrl: './cv-certification.component.html',
  styleUrls: ['./cv-certification.component.css']
})
export class CvCertificationComponent implements OnInit {
  @Input() editable: boolean = false;
  @Input() title: String = "";
  @Input() description: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
