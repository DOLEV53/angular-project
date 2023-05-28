import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() headline = '';

  constructor(
      private api: ApiService,
      private router: Router,
      private auth: AuthService
  ) {}

   loggedIn(): boolean {
        return this.auth.isLoggedIn();
    }

    getUserEmail(): string {
     return this.api.getEmail()
    }
   

   logout() {
        this.api.deleteToken();
        this.router.navigate(['login']);
    } 

}
