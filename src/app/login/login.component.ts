import { AuthService } from './../services/auth.service';
import { UserService } from './../services/user.service';
import { UserGuard } from './../guard/user.guard';
import { ForgotPasswordComponent } from './../forgot-password/forgot-password.component';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur = 0;
  err:number=0;
  users! : User[];



 
  constructor(private authService: AuthService,
              private router: Router ,
              private userService: UserService) {
              }

  ngOnInit(): void {}
              
 
        onLoggedin():void {
        this.authService.login(this.user)
        .subscribe({next: (data) => {
          let jwToken = data.headers.get('Authorization')!;
          this.authService.saveToken(jwToken);
          this.router.navigate(['/docs']); 
          },
            error: (err: any) => {
            this.err = 1; 
          }
     
    });
   
    localStorage.setItem('email', this.user.email);
    localStorage.setItem('password', this.user.password);
    const email = (localStorage.getItem('email'));
    const password = (localStorage.getItem('password'));
    console.log(email);
    console.log(password);

      } 


      public hidePassword = true;
      public togglePassword(): void {
      this.hidePassword = !this.hidePassword;
        }
    



       
       
      
}
