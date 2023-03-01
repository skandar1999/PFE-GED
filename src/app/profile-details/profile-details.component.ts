import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { identifierName } from '@angular/compiler';
import { Data } from 'popper.js';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  user = new User();
  users! : User[];
  status = false;
  currentUser: any;
  public data: string | null = null;

  addToggle()
  {
    this.status = !this.status;
  }

  constructor(public authService: AuthService,private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void { }
  

  

  onLogout() {
    this.authService.logout();
  }

}