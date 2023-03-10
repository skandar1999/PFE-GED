import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  users!: User[];
  
  status = false;
  
  allUsers! :any[];
  searchTerm!: string;


  public data: string | null = null;
  username!: string;
  password!:string;
  email:any;
  id!: number;
  mobile!: string;


  curentUser:any;
  token!:any;
  userData: any;
  newData: any;


  constructor(private userService: UserService , private authService: AuthService) { }

  ngOnInit(): void { 
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





