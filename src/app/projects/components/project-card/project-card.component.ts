import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Input() team: string = '';
  @Input() status: string = '';
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() openDialog: EventEmitter<any> = new EventEmitter();
  showMore: string = 'See more';
 
  showMoreText: boolean = false;


  constructor() { }

  ngOnInit(): void {
    
  }
  onShowMore(){
    this.showMoreText = !this.showMoreText
    if(this.showMore==='See more'){
      this.showMore='See less'
    }else{
      this.showMore = 'See more'
    }
  }

  onDelete() {
    this.delete.emit();
  }

  onOpenDialog(){
    this.openDialog.emit();
  }

}
