import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { identifierName } from '@angular/compiler';
import { Data } from 'popper.js';
import jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {

  user!: User;
  users!: User[];

  public data: string | null = null;
  username!: string;
  password!:string;
  email:any;
  id!: number;
  mobile!:string;
  curentUser:any;
  token!:any;
  userData: any;
  newData: any;
 

 constructor(
    public authService: AuthService,
    public userService: UserService,
    private route: ActivatedRoute,
  ) {}  


  ngOnInit(): void { 
    this.token =window.localStorage.getItem('jwt')
    this.curentUser= jwt_decode(this.token);
    this.findUserByEmail();
  }
  
  
  findUserByEmail(){
    this.userService.rechercherParEmail(this.curentUser?.email).subscribe(us => {
      console.log(us);
      if (us) {
        this.userData = us;
        this.username=this.userData.username;
        this.password=this.userData.password;
        this.mobile=this.userData.mobile;

      }
    });
  } 
 


  onLogout() {
    this.authService.logout();
  }


  

 
}