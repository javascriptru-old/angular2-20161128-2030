import { Injectable, Inject, Component } from '@angular/core';
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
 
  private apiObjectUrl: string;
  
  constructor(private http: Http, private responseService: ResponseService, 
     private globvarService: GlobvarService) {
     this.apiObjectUrl = globvarService.apiLetters;
  }

  public getList(box: IMailbox): Observable<Array<ILetter>>{
        return this.http.get(this.apiObjectUrl)
                    .map(x =>{
                       let data: ILetter[]  =  this.responseService.extractData(x) as Array<ILetter> ;
                       return  data.filter(letter =>  box && letter.mailbox === box._id);      
                     })
                    .catch(this.responseService.handleError)
  }



  public getById(id: string): Observable<ILetter>{
      return this.http.get(this.apiObjectUrl)
                  .map(x =>{
                         let data: Array<ILetter>= this.responseService.extractData(x) as Array<ILetter> ;
                         let filtered = data.filter(value => value._id ===id);   
                         if (filtered.length)
                           return  filtered[0];
                        return  undefined;
                  })
                  .catch(this.responseService.handleError);
  }



  public delete(value: ILetter){
     return this.http.delete(this.apiObjectUrl + `/${value._id}`)
          .map(x=>x)
          .catch(this.responseService.handleError);   
  }

  public save(value: ILetter): Observable<ILetter> {
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

private getRandomInt(min: number, max: number)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

public generate(box: IMailbox){
    let letters = new Array<ILetter>();
    let cnt: Number = this.getRandomInt(7,15);
    for(let j = 0; j < cnt; j++)
    {
        let letter: ILetter = {
          _id: undefined,
          mailbox: box._id,
          subject: `subject - ${j}`,
          to: `addr${j}@mail.com`,
          body: `some text - ${j}`
        }
        letters.push(letter);
    }

    let data = { letters : letters};
    return this.http.post(this.globvarService.apiUrl, data)
            .map(this.responseService.extractData)
            .catch(this.responseService.handleError);

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
