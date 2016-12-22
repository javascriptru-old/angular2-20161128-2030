import { LogService } from './../log.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/src/Observable';
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/filter'

interface User {
  firstName: string;
  surname: string;
  photo: string; 
}

@Injectable()
export class UserService {

  constructor(private log : LogService,
  private http: Http) { 
  }

  getAll() {
    //Observable<Response>
    return this.http.get('https://learn.javascript.ru/courses/groups/api/participants?key=f0bney')
    .map(response => response.json().filter((user:User) => !!user.photo))
  }

}
