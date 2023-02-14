import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css'],
})
export class ForbiddenComponent implements OnInit {
  user = new User();
  erreur = 0;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onLoggedin() {
    //console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) this.router.navigate(['/docs']);
    //alert('Login ou mot de passe incorrecte!');
    else this.erreur = 1;
  }
}
