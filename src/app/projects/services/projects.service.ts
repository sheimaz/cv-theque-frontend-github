import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private project: any = {};
  private token: any = localStorage.getItem("act");
  private API_URL = 'http://localhost:3000';


  constructor(private http: HttpClient,
    private router: Router,
    private toast: ToastrService) {
      this.token = localStorage.getItem("act");
}

  setProject(project: any){
    this.project = project;
  }
  getProjectDep(){
    console.log("first");
    console.log(this.project);
    return this.project.secteur;
  }
   /* Getting All projects */
   getAllProject(): Observable<any> {
    
     console.log(this.token);
    return this.http.get(`${this.API_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("act")}`
      }
    });
  }

  createproject(project:any) {
    console.log(project)
    return this.http.post(`${this.API_URL}/projects`, {...project}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("act")}`
      }
    });
  }

  /*createCv(name: string, job: string) {
    return this.http.post(${this.API_URL}/create, {name, job}, {
      headers: {
        Authorization: Bearer ${this.token}
      }
    });
  }*/

  deleteproject(projectId: number) {
    return this.http.delete(`${this.API_URL}/projects/${projectId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
      
    }).pipe(
      tap(res => {
        // @ts-ignore
        if (res.success) {
          this.toast.success('project deleted successfully');
        }
      })
    );
  }


}