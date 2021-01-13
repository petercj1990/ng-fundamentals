
import { Component, Inject, inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color:#E05C65; }
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder { background-color:#999; }
    .error :-moz-placeholder { background-color:#999; }
    .error :ms-input-placeholder { background-color:#E05C65; }
  `]
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(AuthService)public authService: AuthService,
  @Inject(Router)public router: Router) {

  }
  profileForm: FormGroup;
  ngOnInit() {
    var currUser = this.authService.giveCurrentUser();
    this.profileForm = new FormGroup({
      firstName: new FormControl(currUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      lastName:  new FormControl(currUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfile(formValue) {
    if (this.profileForm.valid){
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);
      this.router.navigate(['/events']);
    }
  }
  validateLastName(){
    return this.profileForm.controls.lastName.invalid && this.profileForm.controls.lastName.touched;
  }

  validatefirstName(){
    return this.profileForm.controls.firstName.invalid && this.profileForm.controls.firstName.touched;
  }

}
