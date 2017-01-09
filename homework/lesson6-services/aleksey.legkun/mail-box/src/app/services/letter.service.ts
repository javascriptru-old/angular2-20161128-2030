import { Injectable } from '@angular/core';
import{ Http, Response }  from '@angular/http';
import { Observable }   from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IMailbox } from './../interfaces/mailbox';
import { ILetter } from './../interfaces/letter';
import { ResponseService } from './response.service';
import { GlobvarService } from './globvar.service';
import { ITypeahead } from './../interfaces/typeahead';



@Injectable()
export class LetterService implements ITypeahead  {
 
  constructor(private http: Http, private responseService: ResponseService, private globvarService: GlobvarService) {}

  public getList(box: IMailbox){
        return this.http.get(this.globvarService.apiLetters, box||{})
                    .map(x =>{
                       let data: ILetter[]  =  this.responseService.extractData(x) as Array<ILetter> ;
                       return  data.filter(letter => box!==undefined && letter.mailbox === box._id);      
                     })
                    .catch(this.responseService.handleError)
  }


  public getTypeaheadList(filter : string, maxItems: number):  Observable<string[]>{
            return this.http.get(this.globvarService.apiLetters)
              .map(x =>{
                          let data: ILetter[] = this.responseService.extractData(x) as Array<ILetter> ;
                          return  data.map(letter => letter.subject).filter(x => x.includes(filter)).slice(0,maxItems);          
                        })
                        .catch(this.responseService.handleError);
  }


}
