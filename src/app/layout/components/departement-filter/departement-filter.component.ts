import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-departement-filter',
  templateUrl: './departement-filter.component.html',
  styleUrls: ['./departement-filter.component.css']
})
export class DepartementFilterComponent implements OnInit {
  @Output() depField: EventEmitter<any> = new EventEmitter();
  departement = new FormControl();
  departementList: string[] = ['DIGIX', 'BEST', 'CAO', 'ADMINISTRATION', 'FINLAB', 'FSI','MARKETING_SALES','PMO','PROXYMFRANCE','PROXYM_U','QA','RH','SI_Integration','SUPPORT_CLIENT','TGO','VALOMNIA '];
  constructor() { }

  ngOnInit(): void {
  }
  onDepChange(event:any){

    this.depField.emit(event.value);
   
  }

}
