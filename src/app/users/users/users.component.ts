import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Departement, User, UserRole } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  headerTitle: string = "User Manager";
  filesNumber: string = 0 +" Users";
  btnText: string = "add User"
  users:User[]=[{id:1,
    username: "sheima",
    job: "job",
    role: UserRole.RESPONSABLEPOLE,
    departement: Departement.DIGIX
  },
  {id:2,
    username: "ela",
    job: "job",
    role: UserRole.COLLABORATEUR,
    departement: Departement.DIGIX
  }] ;

  constructor(private apiService: ApiService,private _router: Router) {}
 
  ngOnInit(): void {
    this.apiService.getAllusers().subscribe((data)=> {
      this.users=data;
      this.filesNumber = data.length + " Users"; 
    });

  }
  openDialog(){
    this._router.navigateByUrl('/register')
  }
  delete(id: number) {
    if (confirm('Do you want to remove the user?')) {
      this.apiService.deleteuser(id).subscribe(res => {
        // @ts-ignore
        if (res.success) {
          this.apiService.getAllusers().subscribe((data)=> {
            this.users=data;
          })

        }
      });
    }
  }

}