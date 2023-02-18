import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  newUser = new User();
  
  users! : User[];
  
  constructor(private authService: AuthService , private router: Router) {}

  ngOnInit(): void {}



  userCreate(){
    this.authService.ajouterUser(this.newUser)
    .subscribe(us => {
    console.log(us);
    this.router.navigate(['login']);
    });
 
    }

}
