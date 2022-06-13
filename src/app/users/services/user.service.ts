import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {ToastrService} from 'ngx-toastr';;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: any = localStorage.getItem("act");
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private router: Router,
    private toast: ToastrService) {
      this.token = localStorage.getItem("act");
     }

  ///////////////////////////////////////////////////API CALLS
  //Fetch All Users
  getAllusers(): Observable<any> {
    
    return this.http.get(`${this.API_URL}/users`,{
      headers: {
        Authorization: 'Bearer '+this.token
      }
    }
    );
  }
  //Add User
  register(username: string, password: string, job: string, role:string, departement: string) {
    
    return this.http.post(`${this.API_URL}/auth/register`, {username, password, job, role, departement}).pipe(
      // @ts-ignore
      catchError((err: HttpErrorResponse) => {
        this.toast.error(err.error.message, '', {
          timeOut: 1000
        });
      })
    );
    
  }
  //DeleteUser
  deleteuser(userId: number) {
   
    return this.http.delete(`${this.API_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }}).pipe(
        tap(res => {
          // @ts-ignore
          if (res.success) {
            this.toast.success('user deleted successfully');
          }
        })
      );
    }
     ///////////////////////////////////////////////////Data Manipulation
     


}
