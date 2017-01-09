import { Injectable, Inject, Component } from '@angular/core';
import{ Http, Response }  from '@angular/http';
import { Observable }   from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IMailbox } from './../interfaces/mailbox';
import { ITypeahead } from './../interfaces/typeahead';
import { ResponseService } from './response.service';
import { GlobvarService } from './globvar.service';

@Injectable()
export class MailboxService implements ITypeahead 
{
  constructor(private http: Http, private responseService: ResponseService, private globvarService: GlobvarService) {}

  public getList(){
      return this.http.get(this.globvarService.apiMailBoxes)
                  .map(this.responseService.extractData)
                  .catch(this.responseService.handleError);
  }

  public getTypeaheadList(filter : string, maxItems: number) : Observable<string[]> {
      return this.http.get(this.globvarService.apiMailBoxes)
              .map(x =>{
                          let data: IMailbox[] = this.responseService.extractData(x) as Array<IMailbox> ;
                          return  data.map(letter => letter.title).filter(x => x.includes(filter)).slice(0,maxItems);          
                        })
                        .catch(this.responseService.handleError);
  }






}
