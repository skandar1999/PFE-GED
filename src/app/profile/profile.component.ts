import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  id!: number;
  
  status = false;
  username!:string;
  user = new User();
  users! :any[];
  allUsers! :any[];
  searchTerm!: string;

  constructor(private userService: UserService , private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.listeUsers().subscribe(us => {
      console.log(us);
      this.allUsers = us;
      });
  }

  

  rechercherParUser(){
    this.userService.rechercherParUsername(this.username).
    subscribe(us => {
    this.users =  us });
    }

    onKeyUp(filterText : string){
      this.users = this.allUsers.filter(item =>
      item.username.toLowerCase().includes(filterText));
      console.log(this.users);
      }
      
    
 
  }





