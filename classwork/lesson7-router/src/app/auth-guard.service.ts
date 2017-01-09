import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor() {}

  canActivate() {
     return Observable.create((observer) => {
        // setTimeout(() => {
           observer.next(false);
        // }, 2000);
     });
  }

}
