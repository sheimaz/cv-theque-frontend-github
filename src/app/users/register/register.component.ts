import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name_text: string = ""


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }

    const {username, password, job, role, departement} = registerForm.value;
    this.userService.register(username, password, job, role, departement).subscribe(res => {
      registerForm.reset();
    });

  }
}