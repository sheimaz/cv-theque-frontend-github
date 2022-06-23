import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})
export class JobFilterComponent implements OnInit {
  @Output() roleField: EventEmitter<any> = new EventEmitter();
  job = new FormControl();
  jobList: string[] = ['COLLABORATEUR', 'ADMIN', 'RESPONSABLEPOLE', 'TEAMLEAD'];
  constructor() { }

  ngOnInit(): void {
  }
  onRoleChange(event:any){

    this.roleField.emit(event.value);
   
  }

}
