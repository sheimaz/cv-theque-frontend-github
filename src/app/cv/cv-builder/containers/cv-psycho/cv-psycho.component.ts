import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-cv-psycho',
  templateUrl: './cv-psycho.component.html',
  styleUrls: ['./cv-psycho.component.css'],
})
export class CvPsychoComponent implements OnInit {
  @Input() editable: boolean = false;
  AAC: string = 'Analysis and conception';
  AM: string = 'Agile method';
  DEV: string = 'Development';
  WAIT: string = 'Watch and innovate. technical';
  PM: string = 'Project Management';
  TAQ: string = 'Test & Quality';
  AANDC: string = 'Animation & communication';
  dataAAC: number = 100;
  dataAM: number = 50;
  dataDEV: number = 50;
  dataWAIT: number = 100;
  dataPM: number = 50;
  dataTAQ: number = 100;
  dataAANDC: number = 0;
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
  },
    scale: {
      ticks: {
          beginAtZero: true,
          max: 100
      }
  }
  };
  public radarChartLabels: Label[] = [
    this.AAC,
    this.AM,
    this.DEV,
    this.WAIT,
    this.PM,
    this.TAQ,
    this.AANDC,
  ];

  public radarChartData: ChartDataSets[] = [
    {
      data: [
        this.dataAAC,
        this.dataAM,
        this.dataDEV,
        this.dataWAIT,
        this.dataPM,
        this.dataTAQ,
        this.dataAANDC,
      ],
      backgroundColor: 'rgba(92, 55, 205, 0.5)',
      borderColor:'#5d37cd',
      pointBackgroundColor: '#5d37cd'
    },
  ];
  public radarChartType: ChartType = 'radar';
  // Now you can reference your chart via `this.chart`

  constructor() {}

  ngOnInit(): void {}
  onInputChange(event: MatSliderChange) {
    this.radarChartData = [
      {
        data: [
          this.dataAAC,
          this.dataAM,
          this.dataDEV,
          this.dataWAIT,
          this.dataPM,
          this.dataTAQ,
          this.dataAANDC,
        ],
        backgroundColor: 'rgba(92, 55, 205, 0.25)',
        borderColor:'#5d37cd',
        pointBackgroundColor: '#5d37cd'
      },
    ];
    console.log( this.radarChartData );
  }
  onRefresh(){
    this.radarChartData = [
      {
        data: [
          this.dataAAC,
          this.dataAM,
          this.dataDEV,
          this.dataWAIT,
          this.dataPM,
          this.dataTAQ,
          this.dataAANDC,
        ],
        backgroundColor: 'rgba(92, 55, 205, 0.5)',
        borderColor:'#5d37cd',
        pointBackgroundColor: '#5d37cd'
      },
    ];
  }
}
