import { Http } from '@angular/http';
import { IUser } from './iuser';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getOne(userId: number):Observable<IUser> {

//......

    return this.http.get(`/users/${userId}`).map(result => result.json());

 //  .......
  }

  getAll():Observable<IUser[]> {
    return this.http.get(`/users`).map(result => result.json());
  }

}
