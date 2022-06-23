import { CvService } from './../cv/services/cv.service';
import { Component, OnInit } from '@angular/core';
import {CvComponent} from '../cv/cv-list/cv.component';
import {ApiService} from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerTitle: string = "CV Manager";
  filesNumber: string = 0 + " files";
  showPanel: boolean = false;
  btnText: string = "Upload CV"
  cvs: any = [];//TO SAVE ALL DATA
  searchValue = '';
  filteredcvs: any[] = [{title:'test1',description:'test descp'},{title:'test1',description:'test descp'},{title:'test1',description:'test descp'}];//TO SHOW SAVED DATA 
  

  constructor(private cvService: CvService,private router: Router) {
  }

  ngOnInit(): void {
    this.cvService.getAllcvs().subscribe((cvs) => {
      console.log(cvs)
      this.cvs = cvs;
      this.filteredcvs = this.cvs;
      this.filesNumber = this.cvs.length + " Cvs";
    })

  }
  NavigateTo(){
    this.router.navigateByUrl('/create').then();
  }
  // tslint:disable-next-line:typedef
  onSearchChange(searchValueInput: any) {
    console.log(searchValueInput);
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
    this.showPanel = !this.showPanel;

    // dialogRef.afterClosed().subscribe(data => {
    //   console.log(data);
    //   this.cvService.createcv(data.title, data.description).subscribe((result: any) => {
    //     console.log(result);
    //     this.cvs.push(result);
    //     this.filteredcvs = this.cvs;
    //   })
    // });
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
    console.log(id)
    if (confirm('Do you want to remove the cv?')) {
      this.cvService.deletecv(id).subscribe(res => {
        // @ts-ignore
        if (res.success) {
          this.cvService.getAllcvs().subscribe((cvs) => {
            this.cvs = cvs;
            this.filteredcvs = this.cvs;
            this.filesNumber = this.cvs.length + " Cvs";
          })
        }
      });
    }
  }


submitForm(event:any){
  console.log("first"+ JSON.stringify(event));
  this.cvService.createcv(event.title, event.description).subscribe((result: any) => {
    console.log(result);
    this.cvs.push(result);
    this.filteredcvs = this.cvs;
  })}

}
