import { ParseSpan } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'papa',
      lastName: 'john',
    }

  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.lastName = lastName;
    this.currentUser.firstName = firstName;
  }
  giveCurrentUser() {
    return this.currentUser;
  }
}
