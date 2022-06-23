import { UserService } from './../../../users/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/user';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  selectedTab:number = 0;
  users:any[]=[];
  filterdUsers: any[]= [];
  departement: String ='';

  constructor(private userService: UserService,private projectsService: ProjectsService,private router: Router,) {
    this.userService.getAllusers().subscribe((data)=> {
      this.users=data;
      this.filterdUsers = data;
    });

   }

  ngOnInit(): void {
  }
  onchangeTab(){
    this.selectedTab=1;
    this.departement = this.projectsService.getProjectDep();
    console.log(this.departement);
    this.filterdUsers=this.users;

   
    this.filterdUsers= this.filterdUsers=this.users.filter(
        el => {
          return el.departement === this.departement

        }
        );
    
        console.log(this.filterdUsers) 
   
  }
  navigateToMain(){
    this.router.navigateByUrl('/projects').then();
  }

}
