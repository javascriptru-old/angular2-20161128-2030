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

  getLettersByMailbox(mailboxId:number) {
    return this.getLettersAll()
      .map(letters => letters.filter(letter => letter.mailbox === mailboxId));
  }

  getLettersBySearchText(searchText:string) {
    return this.getLettersAll()
      .map(letters => letters.filter(letter => {
        return letter.subject.includes(searchText) || letter.body.includes(searchText) || letter.to.includes(searchText);
      }));
  }

  private getLettersAll() {
    return this.http
      .get(`${this.requestUrl}/letters`)
      .map((response:Response) => <Letter[]>response.json())
  }
}
