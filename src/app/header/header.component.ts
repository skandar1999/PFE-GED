import { UserService } from './../services/user.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  users!: User[];
  username! : string;
  constructor(public authService: AuthService , public userService:UserService , private router: Router) {}

  ngOnInit(){
    this.authService.loadToken();
    if (this.authService.getToken()==null ||
    this.authService.isTokenExpired())
    this.router.navigate(['/login']);
  }

  

  onLogout() {
    this.authService.logout();
  }


    
  


  
    
}








