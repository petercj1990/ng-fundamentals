import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
  `]
})

export class LoginComponent {
  loginForm = new FormControl('', Validators.required);
  mouseoverLogin
  constructor(@Inject(AuthService)private authService: AuthService,
  @Inject(Router)private router: Router ) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    console.log(formValues);
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
