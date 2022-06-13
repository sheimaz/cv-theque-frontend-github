import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css']
})
export class TitleSectionComponent implements OnInit {
  @Output() onClickBtn: EventEmitter<any> = new EventEmitter();
  @Input() pushStyle: boolean = false;
  @Input() title: string = 'File Manager';
  @Input() btnText: string = 'Upload file';
  @Input() descp: string = 7 + " Cvs";

  constructor() { }

  ngOnInit(): void {
  }
  onClickBtnHandler(){
    this.onClickBtn.emit();
  }
}
