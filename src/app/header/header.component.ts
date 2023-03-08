import { UserService } from './../services/user.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  users!: User[];
  username! : string;
  curentUser:any;
  token!:any;

  constructor(public authService: AuthService , public userService:UserService , private router: Router) {}

  ngOnInit(){
    this.token =window.localStorage.getItem('jwt')
    this.curentUser= jwt_decode(this.token);
  }

  

  onLogout() {
    this.authService.logout();
  }


    
  


  
    
}








