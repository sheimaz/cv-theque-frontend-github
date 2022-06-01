import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router,NavigationEnd  } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onClickNav: EventEmitter<any> = new EventEmitter();
  showMenu: boolean = true; 
  username = '';
  constructor(private authService: AuthService,private router: Router) { 
  }

  ngOnInit(): void {
    this.authService.jwtUserToken.subscribe(token => {
      if (token) {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username;
      }
      if (this.username) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    });
  }
  onClickNavHandler(){
    this.onClickNav.emit();
  }
  logout() {
    this.username = '';
    this.username = this.authService.logout();
  }

}
