import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { CONFIG } from '../config';

export class User {
  _id:number;
  fullName:string;
  email:string;
  avatarUrl:string;
  birthdate:string;
  gender:string;
  address:string;
}

@Injectable()
export class UserService {

  usersUrl: string = CONFIG.baseUrls.users;

  constructor(private http:Http) {
    console.log('created user service');
  }

  getUser(id:number) {
    return this.getUsers()
      .map(users => users.find(user => user._id === id));
  }

  getUsers() {
    return this.http
       .get(this.usersUrl)
      .map((response: Response) => <User[]>response.json());
  }
}
