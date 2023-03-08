import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { identifierName } from '@angular/compiler';
import { Data } from 'popper.js';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  user = new User();
  users! : User[];
  status = false;
  public data: string | null = null;

  curentUser:any;
  token!:any;

  addToggle()
  {
    this.status = !this.status;
  }

  constructor(public authService: AuthService,private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void { 
    this.token =window.localStorage.getItem('jwt')
    this.curentUser= jwt_decode(this.token);
    //console.log(jwt_decode(token))
  }
  
  getDecodedAccessToken(token: string): any {
    try {
      this.curentUser= jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  

  onLogout() {
    this.authService.logout();
  }

}