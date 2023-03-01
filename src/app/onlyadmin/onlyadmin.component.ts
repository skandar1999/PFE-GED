import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-onlyadmin',
  templateUrl: './onlyadmin.component.html',
  styleUrls: ['./onlyadmin.component.css']
})
export class OnlyadminComponent implements OnInit {
  

user = new User();
users! : User[];
  constructor( private authService: AuthService ,private userService: UserService) { }

  ngOnInit(): void {
    this.chargerUser();
  }

  

  chargerUser(){
    this.userService.listeUsers().subscribe(user => {
    console.log(user);
    this.users = user;
    });
    }

  supprimerUser(user: User)
  {
  let conf = confirm("Etes-vous sûr supprimer ce compte ?");
  if (conf)
  this.authService.supprimerUser(user.id).subscribe(() => {
  console.log("user supprimé");
  this.chargerUser();
  
  });
  }
  
}
