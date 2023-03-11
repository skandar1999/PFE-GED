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
  erreur = 0;
  err:number=0;
  added: boolean = false;
  vide: boolean = false;
  
  constructor(private authService: AuthService , private router: Router ) {}

  ngOnInit(): void {}


  userCreate() {
    if (!this.newUser.email || !this.newUser.username || !this.newUser.mobile || !this.newUser.password) {
      this.vide = false;
      return;
    }
    this.authService.ajouterUser(this.newUser).subscribe(
      us => {
        console.log(us);
        if (us) {
          
          this.added = true;
        }
      },
      error => {
        this.err = 1;
      }
    );
  }
  

  public hidePassword = true;

public togglePassword(): void {
  this.hidePassword = !this.hidePassword;
}

}