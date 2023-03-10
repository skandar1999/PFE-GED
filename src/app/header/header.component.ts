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
  roles! : string;
  
  curentUser:any;
  token!:any;
  userData: any;
  newData: any;

  constructor(public authService: AuthService , public userService:UserService , private router: Router) {}

  ngOnInit(){
    this.authService.loadToken();
    if (this.authService.getToken()==null ||
    this.authService.isTokenExpired())
    this.router.navigate(['/login']);
    this.token =window.localStorage.getItem('jwt')
    this.curentUser= jwt_decode(this.token);
    //console.log(jwt_decode(token))
    this.findUserByEmail();
  }
  getDecodedAccessToken(token: string): any {
    try {
      this.curentUser= jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  findUserByEmail(){
    this.userService.rechercherParEmail(this.curentUser?.email).subscribe(us => {
      console.log(us);
      if (us) {
        this.userData = us;
        this.roles=this.userData.roles;

        console.log(this.roles)
      }
    });
  } 

  onLogout() {
    this.authService.logout();
  }

  
    
  


  
    
}








