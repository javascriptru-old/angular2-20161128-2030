import { Injectable } from '@angular/core';

import { IGlobvar } from './../interfaces/globvar';

@Injectable()
export class GlobvarService implements IGlobvar {

  public apiUrl: string = 'http://test-api.javascript.ru/v1/lexa/';
  public apiMailBoxes: string = this.apiUrl + 'mailboxes'; 
  public apiLetters: string = this.apiUrl + 'letters';   
  public apiAddressBook: string = this.apiUrl + 'users';   

  constructor() { }

}
