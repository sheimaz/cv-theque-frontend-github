import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-role-filter',
  templateUrl: './role-filter.component.html',
  styleUrls: ['./role-filter.component.css']
})
export class RoleFilterComponent implements OnInit {
  @Output() roleField: EventEmitter<any> = new EventEmitter();
  job = new FormControl();
  jobList: string[] = ['Collaborateur', 'Admin', 'ResponsablePole', 'TeamLead'];
  constructor() { }

  ngOnInit(): void {
  }
  onRoleChange(event:any){

    this.roleField.emit(event.value);
   
  }

}

