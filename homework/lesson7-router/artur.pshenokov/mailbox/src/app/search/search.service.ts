import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { CONFIG } from '../config';

export class Mailbox {
  _id:number;
  title:string;
}

export class Mail {
  _id:number;
  mailbox:number;
  subject:string;
  body:string;
  to:string;
}

@Injectable()
export class SearchService {

  mailsUrl: string = CONFIG.baseUrls.mails;
  mailboxes: string = CONFIG.baseUrls.mailboxes;

  constructor(private http:Http) {
    console.log('created mail service');
  }

  getMailById(id:number) {
    console.log('id: ' + id);
    return this.http
      .get(`${this.mailsUrl}/${id}`)
      .map((response: Response) => <Mail[]>response.json());
  }

  getMails(): Observable<Mail[]> {
    return this.http
      .get(this.mailsUrl)
      .map((response: Response) => <Mail[]>response.json());
  }

  getMailboxes() {
    return this.http
      .get(this.mailboxes)
      .map((response:Response) => <Mailbox[]>response.json());
  }

  getMailsByMailbox(mailboxId:number) {
    return this.getMails()
      .map(mails => mails.filter(mail => mail.mailbox === mailboxId));
  }

  searchMailByText(searchText:string) {
    return this.getMails()
      .map(mails => mails.filter(mail => {
        return mail.subject.includes(searchText) || mail.body.includes(searchText) || mail.to.includes(searchText);
      }));
  }

  /*private getLettersAll() {
    return this.http
      .get(`${this.requestUrl}/letters`)
      .map((response:Response) => <Letter[]>response.json())
  }*/
}
