import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-role-filter',
  templateUrl: './role-filter.component.html',
  styleUrls: ['./role-filter.component.css']
})
export class RoleFilterComponent implements OnInit {
  role = new FormControl();
  roleList: string[] = ['ResponsablePole', 'Collaborateur'];
  constructor() { }

  ngOnInit(): void {
  }

}
