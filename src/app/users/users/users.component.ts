import { UserService } from './../services/user.service';
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
  showPanel: boolean = false;
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
  filterdUsers: User[]= [];

  constructor(private userService: UserService,private _router: Router) {
    this.filterdUsers=this.users;
  }
 
  ngOnInit(): void {
    this.userService.getAllusers().subscribe((data)=> {
      this.users=data;
      this.filterdUsers=data;
      this.filesNumber = data.length + " Users"; 
    });

  }
  onSearchChange(searchValueInput: any) {
    console.log(searchValueInput);
    this.filterdUsers = this.users;
    if (searchValueInput) {
      this.filterdUsers = this.filterdUsers.filter(
        el => {
          return el.username?.toLowerCase().indexOf(searchValueInput.toLowerCase()) !== -1
        }
        );
      console.log(this.filterdUsers);
    } else {
      this.filterdUsers = this.users;
    }
  }
  openDialog(){
    this._router.navigateByUrl('/register')
    //this.showPanel = !this.showPanel;
  }
  delete(id: number) {
    if (confirm('Do you want to remove the user?')) {
      this.userService.deleteuser(id).subscribe(res => {
        // @ts-ignore
        if (res.success) {
          this.userService.getAllusers().subscribe((data)=> {
            this.users=data;
          })

        }
      });
    }
  }

}