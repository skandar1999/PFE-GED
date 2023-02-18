import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users?: User[];
  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    this.authService.listeUsers().subscribe(us => {
    console.log(us);
    this.users = us;
    });
    }
}
