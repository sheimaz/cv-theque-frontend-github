import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name_text: string = ""
  user:any={};
  isUpdate: boolean = false;
  roleList: string[] = ['Collaborateur', 'Admin', 'ResponsablePole', 'TeamLead'];
  roleDep: string[] = [
     'DIGIX',
     'BEST',
     'CAO',
     'ADMINISTRATION',
     'FINLAB',
     'FSI',
     'MARKETING_SALES',
     'PMO',
     'PROXYMFRANCE',
     'PROXYM_U',
     'QA',
     'RH',
     'SI_Integration',
    'SUPPORT_CLIENT',
    'TGO',
    'VALOMNIA',
  ];
  role: String = '';
  departement: String = '';



  constructor(private userService: UserService,  private _router: Router) {
  }

  ngOnInit(): void {
    console.log(this.userService.getUser());
    this.user = this.userService.getUser();
    if( this.user.id ) {
      this.isUpdate=true;
    }
    console.log(this.user)
    console.log(this.isUpdate)

  }
  onRoleChange(event:any){

    this.role = event.value;
    console.log(event.value);
    
   
  }
  onDepChange(event:any){

    this.departement = event.value;
    
    
   
  }

  registerUser(registerForm: NgForm) {
    console.log(this.role);
    if (registerForm.invalid) {
      return;
    }
    if(this.isUpdate){
      console.log("update")
      registerForm.value.role =   this.role;
      registerForm.value.departement =   this.departement;
      const {username, job,role, departement,email} = registerForm.value;
      this.userService.update(this.user.id,username, job, role, departement, email).subscribe(res => {
        registerForm.reset();
        this._router.navigateByUrl('/users');
      });
    }else{
      console.log("add")
      registerForm.value.role =   this.role;
      registerForm.value.departement =   this.departement;
      const {username, password, job, role, departement,email} = registerForm.value;
      this.userService.register(username, password, job, role, departement, email).subscribe(res => {
        console.log(res);
        registerForm.reset();
      });
    }

   

  }

 
}