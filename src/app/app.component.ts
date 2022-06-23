import { Component,Inject,ViewChild } from '@angular/core';
import {ApiService} from './services/api.service';
import jwtDecode from 'jwt-decode';
import { Router,NavigationEnd  } from '@angular/router';
import { delay,filter } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { User } from 'src/app/users/user';
import { DOCUMENT } from '@angular/common';
import { AuthService } from './authentication/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  navFix: boolean = false;
  title = 'cvtheque-front';
  showMenu: boolean = true; 

  username = '';
  job= '';
  users:User[]=[] ;

  public notLog: boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document,private authService: AuthService,private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe((event: any) => 
           {
             if(event.url === '/login'){
              this.notLog = false
             }
             else {
               this.notLog= true;
             }
             
           });
  }

  ngOnInit() {
    this.authService.jwtUserToken.subscribe(token => {
      if (token) {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username;
      }
      // if (this.username) {
      //   this.showMenu = false;
      // } else {
      //   this.showMenu = true;
      // }
    });
    
    
  }
  sidebarHandler(){
    this.navFix=!this.navFix;
    if(this.navFix){
      this.showMenu= false;
      this.document.getElementById("mySidebar")!.style.width = "250px";
      this.document.getElementById("logo-mini")!.style.display = "none";
      this.document.getElementById("logo")!.style.display = "block";
      this.document.getElementById("main")!.style.marginLeft = "250px";
    }else{
      this.showMenu= true;
      this.document.getElementById("main")!.style.marginLeft = "85px";
      this.document.getElementById("mySidebar")!.style.width = "85px";
      this.document.getElementById("logo-mini")!.style.display = "block";
      this.document.getElementById("logo")!.style.display = "none";

    }
   
  }
  sidebarHover(){
    if(this.navFix){
      return;
    }
    if(this.showMenu){
      this.showMenu= false;
      this.document.getElementById("mySidebar")!.style.width = "250px";
      this.document.getElementById("logo-mini")!.style.display = "none";
      this.document.getElementById("logo")!.style.display = "block";
      this.document.getElementById("main")!.style.marginLeft = "250px";
      
    }else{
      this.showMenu= true;



      this.document.getElementById("main")!.style.marginLeft = "85px";
      this.document.getElementById("mySidebar")!.style.width = "85px";
      this.document.getElementById("logo-mini")!.style.display = "block";
      this.document.getElementById("logo")!.style.display = "none";

    }
  }

 /* ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }); 
    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  } */

  logout() {
    this.username = '';
    this.username = this.authService.logout();
  }



}