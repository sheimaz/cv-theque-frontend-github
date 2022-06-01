import { CvService } from './../cv/services/cv.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


import {CvComponent} from '../cv/cv-list/cv.component';
import {ApiService} from '../services/api.service';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerTitle: string = "CV Manager";
  filesNumber: string = 0 + " files";
  btnText: string = "Upload CV"
  cvs: any = [];//TO SAVE ALL DATA
  searchValue = '';
  filteredcvs: any[] = [];//TO SHOW SAVED DATA 
  

  constructor(private apiService: ApiService,private cvService: CvService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.cvService.getAllcvs().subscribe((cvs) => {
      this.cvs = cvs;
      this.filteredcvs = this.cvs;
      this.filesNumber = this.cvs.length + " Cvs";
    })

  }

  // tslint:disable-next-line:typedef
  onSearchChange(event: any) {
    const searchValueInput = event.target.value;
    this.filteredcvs = this.cvs;
    if (searchValueInput) {
      this.filteredcvs = this.filteredcvs.filter(
        el => {
          return el.title.toLowerCase().indexOf(searchValueInput.toLowerCase()) !== -1
        }
        );
      console.log(this.filteredcvs);
    } else {
      this.filteredcvs = this.cvs;
    }
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(CvComponent, {
      width: '500px',
      hasBackdrop: true,
      role: 'dialog',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      this.cvService.createcv(data.title, data.description).subscribe((result: any) => {
        console.log(result);
        this.cvs.push(result);
        this.filteredcvs = this.cvs;
      })
    });
  }

  // tslint:disable-next-line:typedef
  // statusChanged(ev: MatSelectChange, cvId: number, index: number) {
  //   const value = ev.value;
  //   this.apiService.updateStatus(value, cvId).subscribe(cv => {
  //     this.cvs[index] = cv;
  //     this.filteredcvs = this.cvs;
  //   });
  // }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    if (confirm('Do you want to remove the cv?')) {
      this.cvService.deletecv(id).subscribe(res => {
        // @ts-ignore
        if (res.success) {
          this.cvs = this.cvs.filter((t: any) => t.id !== id);
          this.filteredcvs = this.cvs;
        }
      });
    }
  }
}