import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/observable/empty'

import { User } from './user';


@Injectable()
export class UsersService {

  constructor(private http: Http) {
  }

  getAll(filter: string) : Observable<User> {

    if(filter.length > 2){
      return this.http.get('http://test-api.javascript.ru/v1/iliakan/users')
        .map(rsp => rsp.json()
          .map(data => new User(data.fullName, data.email))
          .filter((user: User) => user.fullName.indexOf(filter) !== -1 || user.email.indexOf(filter) != -1)
        );
    }
    else
    {
      return Observable.empty<User>();
    }
  }
}