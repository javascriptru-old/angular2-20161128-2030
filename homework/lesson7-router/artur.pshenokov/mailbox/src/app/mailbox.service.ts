import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

export class Mailbox {
  _id:number;
  title:string;
}

export class Letter {
  _id:number;
  mailbox:number;
  subject:string;
  body:string;
  to:string;
}

@Injectable()
export class MailboxService {

  requestUrl:string = 'http://test-api.javascript.ru/v1/turlife';

  constructor(private http:Http) {
  }

  getMailboxes() {
    return this.http
      .get(`${this.requestUrl}/mailboxes`)
      .map((response:Response) => <Mailbox[]>response.json());
  }

  /*getLetters(mailbox:Mailbox) {
   return this.getLetters()
   .map(letters => letters.filter(letter => return letter.mailbox === mailbox._id))
   }*/

  getLetters(mailboxId:number) {
    return this.http
      .get(`${this.requestUrl}/letters`)
      .map((response:Response) => <Letter[]>response.json())
      .map(letters => letters.filter(letter => letter.mailbox === mailboxId));
  }
}
