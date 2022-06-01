import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token: any = localStorage.getItem("act");
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService) {
                this.token = localStorage.getItem("act");

  }



  /* Getting All users */
  getAllusers(): Observable<any> {
    
    return this.http.get(`${this.API_URL}/users`,{
      headers: {
        Authorization: 'Bearer '+this.token
      }
    }
    );
  }

  /*verifyToken(token: string) {
    return this.http.post(`${this.API_URL}/auth/verifyToken`, {token});
  } */

  

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


  
  

  /*updateStatus(statusValue: string, cvId: number) {
    return this.http.patch(`${this.API_URL}/cvs/${cvId}`, {status: statusValue}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      tap(res => {
        if (res) {
          this.toast.success('Status updated successfully', '', {
            timeOut: 1000
          });
        }
      })
    );
  }
*/
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

 


 /* private validateJWT() {
    const fetchedToken = localStorage.getItem('act');
    if (fetchedToken) {
      try {
        const decryptedToken = atob(fetchedToken);
        this.verifyToken(decryptedToken).toPromise().then((res: any) => {
          if (res.status) {
            this.token = decryptedToken;
            localStorage.setItem('act', btoa(this.token));
            this.jwtToken$.next(this.token);
          }
        }).catch((err: HttpErrorResponse) => {
          if (err) {
            localStorage.removeItem('act');
            this.token = '';
            this.jwtToken$.next(this.token);
          }
        });
      }
        // @ts-ignore
      catch (err: DOMException) {
        localStorage.removeItem('act');
        this.toast.info('Session not valid, please login again', 'Token Failure', {
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
      }
    }
  }*/


}

interface TokenResponse {
  status: boolean;
}