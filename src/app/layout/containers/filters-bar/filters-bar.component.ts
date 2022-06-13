
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.css']
})
export class FiltersBarComponent implements OnInit {
  @Output() searchField: EventEmitter<any> = new EventEmitter();
  @Input() pushStyle: boolean = false;
  @Input() UserManager: boolean = false;
  public pushFilter: boolean = false;
  public inputFill: String = '';

  
  constructor() { }

  ngOnInit(): void {
  }
  onSearchChange(event: any) {
    this.searchField.emit(event.target.value);
  }

}
