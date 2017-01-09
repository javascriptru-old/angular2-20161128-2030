import { Injectable } from '@angular/core';
import{ Http, Response }  from '@angular/http';
import { Observable }   from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IUser } from './../interfaces/user';
import { IMailbox } from './../interfaces/mailbox';
import { ILetter } from './../interfaces/letter';


import { ResponseService } from './response.service';
import { GlobvarService } from './globvar.service';

@Injectable()
export class GeneratorService {

  constructor(private http: Http, private responseService: ResponseService, private globvarService: GlobvarService) {}

public genMailboxes(){
   let mailboxes = new Array<IMailbox>();
   mailboxes.push({_id: undefined, title: 'Incoming'})
   mailboxes.push({_id: undefined, title: 'Spam'})
   mailboxes.push({_id: undefined, title: 'Outgoing'})
   mailboxes.push({_id: undefined, title: 'Trash'})
   let data = { mailboxes : mailboxes};
   return this.http.post(this.globvarService.apiUrl, data)
            .map(this.responseService.extractData)
            .catch(this.responseService.handleError).subscribe();   
}

public getMailboxes(){
      return this.http.get(this.globvarService.apiMailBoxes)
                  .map(this.responseService.extractData)
                  .catch(this.responseService.handleError);
  }

private getRandomInt(min: number, max: number)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

public genLetters(){
   return this.getMailboxes().subscribe(
                       data => {
                         this.genLettersInternal(data as Array<IMailbox>).subscribe();
                       },
                       error =>  this.errorMessage = <any>error);      
}

private genLettersInternal(mailboxes: Array<IMailbox>){
    let letters = new Array<ILetter>();
    let cnt: Number = this.getRandomInt(7,15);
    for (let box of mailboxes) {
      for(let j = 0; j < cnt; j++)
      {
          let letter: ILetter = {
            mailbox: box._id,
            subject: `subject - ${j}`,
            to: `addr${j}@mail.com`,
            body: `some text - ${j}`
          }
          letters.push(letter);
      }
    }
    let data = { letters : letters};

    return this.http.post(this.globvarService.apiUrl, data)
            .map(this.responseService.extractData)
            .catch(this.responseService.handleError);

}

  public clearData(){
      return this.http.delete(this.globvarService.apiUrl)
                      .map(this.responseService.extractData)
                      .catch(this.responseService.handleError).subscribe();
  }




public dataMessage;
public errorMessage;

 

}
