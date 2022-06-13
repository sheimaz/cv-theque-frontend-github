import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psy-filter',
  templateUrl: './psy-filter.component.html',
  styleUrls: ['./psy-filter.component.css']
})
export class PsyFilterComponent implements OnInit {
  public AACvalue:number =0;
  public DEVvalue:number =0;
  public PMvalue:number =0;
  public WITvalue:number =0;
  public AMvalue:number =0;
  public ACvalue:number =0;
  public TQvalue:number =0;



  constructor() { }

  ngOnInit(): void {
  }

}
