import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {ToastrService} from 'ngx-toastr';import { User } from '../user';
;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : any = {};
  private token: any = localStorage.getItem("act");
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private router: Router,
    private toast: ToastrService) {
      this.token = localStorage.getItem("act");
     }

     setUser(user:any){
      this.user = user;
     }

     getUser(){
      return this.user;
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
  register(username: string, password: string, job: string, role:string, departement: string, email:string) {
    // return this.http.post(`${this.API_URL}/auth/register`, {email,username, password, job, role, departement},
    
    //  {
    //   headers: {
    //     Authorization: `Bearer ${this.token}`
    //   }}).pipe(
    //   // @ts-ignore
    //   catchError((err: HttpErrorResponse) => {
    //     console.log(err);
    //     this.toast.error(err.error.message, '', {
    //       timeOut: 1000
    //     });
    //   })
    // );
    return this.http.post(`${this.API_URL}/auth/register`, {email,username, password, job, role, departement}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      tap((res:any) => {
        if (res.id) {
          this.toast.success('user Added successfully');
        }
      })
    );
    
  }


  update(id:number, username: string, job: string, role:string, departement: string,email:string) {
    
    return this.http.put(`${this.API_URL}/users/${id}`, {email,username, job, role, departement}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      tap(res => {
        // @ts-ignore
        if (res.affected) {
          this.toast.success('user updated successfully');
        }
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
