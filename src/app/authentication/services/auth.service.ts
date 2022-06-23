import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: any = '';
  private role: any = '';
  private jwtToken$ = new BehaviorSubject<string>(this.token);
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private router: Router,
    private toast: ToastrService) { }

    get jwtUserToken(): Observable<string> {
      return this.jwtToken$.asObservable();
    }

    login(username: string, password: string) {

      this.http.post(`${this.API_URL}/auth/login`, {username, password})
  
        .subscribe((res: any) => {
          this.token = res.token;
          this.role = res.role;
          console.log(res);
  
          if (this.token) {
            this.toast.success('Login successful, redirecting now...', '', {
              timeOut: 700,
              positionClass: 'toast-top-center'
            }).onHidden.toPromise().then(() => {
              this.jwtToken$.next(this.token);
              localStorage.setItem('act', this.token);
              localStorage.setItem('role', this.role);
              if(!this.role){
                this.router.navigateByUrl('/login').then();
              }
              if( this.role === 'Admin'){
                this.router.navigateByUrl('/users').then();
              }else if(this.role === 'ResponsablePole') {
                this.router.navigateByUrl('/projects').then();
              }else {
                this.router.navigateByUrl('/').then();}
              //console.log(first)
            
            });
          }
        }, (err: HttpErrorResponse) => {
          this.toast.error('Authentication failed, try again', '', {
            timeOut: 1000,
            positionClass: 'toast-top-center'
          });
        });
    }
    logout() {
      this.token = '';
      this.jwtToken$.next(this.token);
      this.toast.success('Logged out succesfully', '', {
        timeOut: 500
      }).onHidden.subscribe(() => {
        localStorage.removeItem('act');
        localStorage.removeItem('role');
        this.router.navigateByUrl('/login').then();
      });
      return '';
    }
}
