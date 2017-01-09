import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/concatMap';
import { IMailItem } from './mail-item/mail-item.interface';

@Injectable()
export class MailboxService {

  constructor(private http: Http) {

  }

  getLetters(): Observable<IMailItem[]> {
    return this.http
      .get(' http://test-api.javascript.ru/v1/pleonov/letters')
      .map((response: Response) => response.json());
  }

}
