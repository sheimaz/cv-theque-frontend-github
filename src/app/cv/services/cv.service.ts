import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private token: any = localStorage.getItem("act");
  private API_URL = 'http://localhost:3000';


  constructor(private http: HttpClient,
    private router: Router,
    private toast: ToastrService) {
      this.token = localStorage.getItem("act");
}

   /* Getting All cvs */
   getAllcvs(): Observable<any> {
    
     console.log(this.token);
    return this.http.get(`${this.API_URL}/cvs`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("act")}`
      }
    });
  }

  createcv(title: string, description: string) {
    return this.http.post(`${this.API_URL}/cvs`, {title, description}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  createCv(name: string, job: string) {
    return this.http.post(`${this.API_URL}/create`, {name, job}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  deletecv(cvId: number) {
    return this.http.delete(`${this.API_URL}/cvs/${cvId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
      
    }).pipe(
      tap(res => {
        // @ts-ignore
        if (res.success) {
          this.toast.success('cv deleted successfully');
        }
      })
    );
  }


}
