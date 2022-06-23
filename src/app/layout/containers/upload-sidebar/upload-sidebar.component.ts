import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { faFile } from '@fortawesome/free-solid-svg-icons';
import { CvService } from 'src/app/cv/services/cv.service';

@Component({
  selector: 'app-upload-sidebar',
  templateUrl: './upload-sidebar.component.html',
  styleUrls: ['./upload-sidebar.component.css']
})
export class UploadSidebarComponent implements OnInit {
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  faFile = faFile;
  @Input() pushStyle: boolean = false;
  title: any;
  description: any;



 constructor(private cvService: CvService){

 }
  
 ngOnInit(): void {
 }
 onCancel() {
  console.log("in comp")
  console.log({title: this.title, description: this.description});
  // this.cvService.createcv(this.title, this.description).subscribe((result: any) => {
  //   console.log(result);
  //   // this.cvs.push(result);
  //   // this.filteredcvs = this.cvs;
  // })}
 }

  create() {
    console.log({title: this.title, description: this.description});
    this.submitForm.emit({title: this.title, description: this.description});
  

  }

}
