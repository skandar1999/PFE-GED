import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  
  user = new User();
  users! : User[];
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

  constructor(public authService: AuthService ,private router: Router) {}

  ngOnInit(): void {
    
    this.chargerUser();
  }

  chargerUser(){
    this.authService.listeUsers().subscribe(user => {
    console.log(user);
    this.users = user;
    });
    }



    supprimerUser(user: User)
  {
  let conf = confirm("Etes-vous sûr supprimer Votre compte ?");
  if (conf)
  this.authService.supprimerUser(user.id).subscribe(() => {
  console.log("user supprimé");
  this.chargerUser();
  });
  }
  
  onLogout() {
    this.authService.logout();
  }

}
