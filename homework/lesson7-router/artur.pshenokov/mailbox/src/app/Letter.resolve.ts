import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LetterResolve implements Resolve<any> {

  // constructor(private contactsService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return '';//this.contactsService.getContact(route.params['id']);
  }
}
