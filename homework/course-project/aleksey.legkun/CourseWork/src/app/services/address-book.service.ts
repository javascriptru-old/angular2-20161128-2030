import { Injectable, Inject, Component } from '@angular/core';
import{ Http, Response }  from '@angular/http';
import { Observable }   from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IPerson } from './../interfaces/person';
import { ITypeahead } from './../interfaces/typeahead';
import { ResponseService } from './response.service';
import { GlobvarService } from './globvar.service';


@Injectable()
export class AddressBookService  implements ITypeahead  
{
  constructor(private http: Http, private responseService: ResponseService, private globvarService: GlobvarService) {}


  public getList(): Observable<Array<IPerson>>{
      return this.http.get(this.globvarService.apiAddressBook)
                  .map(this.responseService.extractData)
                  .catch(this.responseService.handleError);
  }

  public getById(id: string): Observable<IPerson>{
      return this.http.get(this.globvarService.apiAddressBook)
                  .map(x =>{
                         let data: Array<IPerson>= this.responseService.extractData(x) as Array<IPerson> ;
                         let filtered = data.filter(person => person._id ===id);   
                         if (filtered.length)
                           return  filtered[0];
                        return  undefined;
                  })
                  .catch(this.responseService.handleError);
  }

 public getByEMail(email: string): Observable<IPerson>{
      return this.http.get(this.globvarService.apiAddressBook)
                  .map(x =>{
                         let data: Array<IPerson>= this.responseService.extractData(x) as Array<IPerson> ;
                         let filtered = data.filter(person => person.email ===email);   
                         if (filtered.length)
                           return  filtered[0];
                        return  undefined;
                  })
                  .catch(this.responseService.handleError);
  }

  public delete(value: IPerson){
     return this.http.delete(this.globvarService.apiAddressBook + `/${value._id}`)
          .map(x=>x)
          .catch(this.responseService.handleError);   
  }

  public saveIfNew(email: string) {
      this.getByEMail(email).subscribe(
                       data => {
                            if (data===undefined)
                            {
                               //add new 
                               let person: IPerson = {  _id: undefined, fullName: email, email: email};
                               this.save(person).subscribe(x=> console.log("created by mail"));
                            }
                          },
                       error => {});

  }

  public save(value: IPerson): Observable<IPerson> {
     if(!value._id)
     {
        return this.http.post(this.globvarService.apiAddressBook, value)
               .map(this.responseService.extractData)
               .catch(this.responseService.handleError);                      
     }

     return this.http.patch(this.globvarService.apiAddressBook + `/${value._id}`, value)
         .map(this.responseService.extractData)
         .catch(this.responseService.handleError);   
  }


  public generate(){
   let nameList = new Array<string>();
   nameList.push("Agatha MacDonald");
   nameList.push("Bruce Robertson");
   nameList.push("Sarah Blare");
   nameList.push("Matthew Turner");
   nameList.push("James Allford");
   nameList.push("James Walls");
   nameList.push("Douglas Fairy");
   nameList.push("Douglas Blare");
   nameList.push("Matthew Blare");

   let persons = new Array<IPerson>();
   for (let item of nameList) {
      persons.push(
        {   _id: undefined,
            fullName: item,
            email:  `${item.replace(' ','')}@gmail.com`
        });
   }
   let data = { users : persons};
   return this.http.post(this.globvarService.apiUrl, data)
            .map(this.responseService.extractData)
            .catch(this.responseService.handleError);   
  }

 public getTypeaheadList(filter : string, maxItems: number):  Observable<string[]>{
            return this.http.get(this.globvarService.apiAddressBook)
              .map(x =>{
                          let data: IPerson[] = this.responseService.extractData(x) as Array<IPerson> ;
                          return  data.map(data => data.email).filter(val =>  (val||'').includes(filter)).slice(0,maxItems);          
                        })
                        .catch(this.responseService.handleError);
  }


}
