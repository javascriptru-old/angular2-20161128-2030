import { Injectable } from '@angular/core';
import{ Http, Response }  from '@angular/http';
import { Observable }   from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ResponseService } from './response.service';
import { GlobvarService } from './globvar.service';

@Injectable()
export class GeneratorService {

  constructor(private http: Http, private responseService: ResponseService, private globvarService: GlobvarService) {}



  public clearData(){
      return this.http.delete(this.globvarService.apiUrl)
                      .map(this.responseService.extractData)
                      .catch(this.responseService.handleError);
  }


}
