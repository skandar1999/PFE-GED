import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }

}
