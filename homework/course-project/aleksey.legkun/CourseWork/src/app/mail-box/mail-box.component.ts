import { Component, OnInit } from '@angular/core';
import { Subject }          from 'rxjs/Subject';
import { Observable }       from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';

import { ActivatedRoute, Router } from '@angular/router';
import { IMailbox } from './../interfaces/mailbox';
import { MailBoxService } from './../services/mail-box.service';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html'

})
export class MailBoxComponent implements OnInit {

  private errorMessage: any;  
  private items: Array<IMailbox>;
  private currentCatalog: string;
  private apiObjectUrl: string;

  constructor(private mailBoxService: MailBoxService, 
              private route: ActivatedRoute,
              private router: Router) { 
     this.currentCatalog =mailBoxService.IncomingBox;
     this.navigate(this.currentCatalog );
  }

  ngOnInit() {
     this.refresh();
  }

  refresh(){
      this.mailBoxService.getList()
                        .subscribe(
                          data => {
                            this.items = data;
                            },
                          error => {
                            this.errorMessage = error;
                          });
  }


  generate(){
       this.mailBoxService.generate()
                        .subscribe(
                        data => { 
                            console.log(data);
                            this.refresh();
                            
                            },
                          error => {this.errorMessage = error;}
                          );                          
  }

  navigate(value: string)
  {
     this.router.navigate(['./', { current: value }], { relativeTo: this.route });
  }

}
