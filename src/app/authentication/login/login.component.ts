import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import {Router} from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.jwtUserToken.subscribe(token => {
      if (token) {
        this.router.navigateByUrl('/').then();
      }
    });
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
    const {username, password} = loginForm.value;
    this.authService.login(username, password);
    return loginForm.reset();
  }
}