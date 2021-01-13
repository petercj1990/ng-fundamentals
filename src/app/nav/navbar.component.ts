import { Component, EventEmitter, Inject, OnInit } from '@angular/core'
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width:1200px) {#searchForm{display:none}}
    li > a.active { color: #F97924; }
  `]
})

export class NavBarComponent {
  /**
   *
   */
  user: IUser;
  constructor(@Inject(AuthService)public authService: AuthService) {
  }

}
