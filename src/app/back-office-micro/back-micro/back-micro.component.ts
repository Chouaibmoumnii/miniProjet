import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-back-micro',
  templateUrl: './back-micro.component.html',
  styleUrls: ['./back-micro.component.css']
})

export class BackMicroComponent {
  showNavbar = true;

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
}

