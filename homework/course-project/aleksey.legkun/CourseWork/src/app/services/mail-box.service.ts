import { Injectable, Inject, Component } from '@angular/core';
import{ Http, Response }  from '@angular/http';
import { Observable }   from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IMailbox } from './../interfaces/mailbox';
import { ResponseService } from './response.service';
import { GlobvarService } from './globvar.service';

@Injectable()
export class MailBoxService
{

  public IncomingBox: string = "Incoming";
  public OutgoingBox: string = "Outgoing";
  public TrashBox: string = "Trash";
  public SpamBox: string = "Spam";


  private apiObjectUrl: string;

  constructor(private http: Http, private responseService: ResponseService, private globvarService: GlobvarService) {
      this.apiObjectUrl = globvarService.apiMailBoxes;
  }

  public getList(): Observable<Array<IMailbox>>{
      return this.http.get(this.apiObjectUrl)
                  .map(this.responseService.extractData)
                  .catch(this.responseService.handleError);
  }

  public getById(id: string): Observable<IMailbox>{
      return this.http.get(this.apiObjectUrl)
                  .map(x =>{
                         let data: Array<IMailbox>= this.responseService.extractData(x) as Array<IMailbox> ;
                         let filtered = data.filter(value => value._id ===id);   
                         if (filtered.length)
                           return  filtered[0];
                        return  undefined;
                  })
                  .catch(this.responseService.handleError);
  }

  public getByName(name: string): Observable<IMailbox>{
      return this.http.get(this.apiObjectUrl)
                  .map(x =>{
                         let data: Array<IMailbox>= this.responseService.extractData(x) as Array<IMailbox> ;
                         let filtered = data.filter(value => value.title ===name);   
                         if (filtered.length)
                           return  filtered[0];
                        return  undefined;
                  })
                  .catch(this.responseService.handleError);
  }  

  public delete(value: IMailbox){
     return this.http.delete(this.apiObjectUrl + `/${value._id}`)
          .map(x=>x)
          .catch(this.responseService.handleError);   
  }

  public save(value: IMailbox): Observable<IMailbox> {
     if(!value._id)
     {
        return this.http.post(this.apiObjectUrl, value)
               .map(this.responseService.extractData)
               .catch(this.responseService.handleError);                      
     }

     return this.http.patch(this.apiObjectUrl + `/${value._id}`, value)
         .map(this.responseService.extractData)
         .catch(this.responseService.handleError);   
  }


  public generate(){
   let mailboxes = new Array<IMailbox>();
   mailboxes.push({_id: undefined, title: this.TrashBox})
   mailboxes.push({_id: undefined, title: this.OutgoingBox})
   mailboxes.push({_id: undefined, title: this.IncomingBox})
   mailboxes.push({_id: undefined, title: this.SpamBox})

   let data = { mailboxes : mailboxes};
   return this.http.post(this.globvarService.apiUrl, data)
            .map(this.responseService.extractData)
            .catch(this.responseService.handleError);   
  }


}
