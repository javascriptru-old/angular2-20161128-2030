import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject }          from 'rxjs/Subject';
import { Observable }       from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';

import { ActivatedRoute, Router } from '@angular/router';
import { ILetter } from './../../interfaces/letter';
import { IMailbox } from './../../interfaces/mailbox';
import { LetterService } from './../../services/letter.service';
import { MailBoxService } from './../../services/mail-box.service';

@Component({
  selector: 'app-mail-box-list',
  templateUrl: './mail-box-list.component.html'
 
})
export class MailBoxListComponent implements OnInit {

  private errorMessage: any;  
  private items: Array<ILetter> = [];
  private currentCatalog: string;
  private currentBox: IMailbox;
  public filterValue: string;


  constructor(private dataService: LetterService, 
              private mailBoxService: MailBoxService,
              private route: ActivatedRoute,
              private router: Router) { 
  

  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
       this.currentCatalog = params["current"];
       if(this.currentCatalog)
         this.refresh();
    });
  }

  refresh(){
      return this.mailBoxService.getByName(this.currentCatalog).subscribe(
                       data => {
                         this.currentBox = data;
                         this.refreshExt();
                       },
                       error => {
                            this.errorMessage = error;
                        });                            
 }

 refreshExt(){
     this.dataService.getList(this.currentBox)
                        .subscribe(
                          data => {
                            this.items = data;
                            this.selectedItems.length = 0
                            this.filterValue = undefined;
                            },
                          error => {
                            this.errorMessage = error;
                          });
 }

  generate(){
    this.dataService.generate(this.currentBox)
                            .subscribe(
                              data => {
                                console.log("generated");
                                this.refreshExt();
                                },
                              error => {
                                this.errorMessage = error;
                              });    
  }


  onNew(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }

 delete() {
    for (var i = 0; i < this.selectedItems.length; i++) 
    {
       this.deleteEx(this.selectedItems[i]);
    }
    this.selectedItems.length = 0;
 }

  deleteEx(value: ILetter) {
    this.dataService.delete(value)
                        .subscribe(
                          data => {
                            for (var i = 0; i < this.items.length; i++) {
                              if(this.items[i]._id === value._id) {
                                this.items.splice(i, 1);
                                break;
                              }
                            }
                            console.log(`${data}`);
                            },
                          error => {this.errorMessage = error;}
                          );
  }  



  private selectedItems = Array<ILetter>();  

  onClicked(id: string) {
    event.stopPropagation();


    let idx= this.selectedItems.findIndex(x=> x._id === id);
    if(idx>-1)
    {
        this.selectedItems.splice(idx, 1);
        return;
    }

    //add
    let idxItem= this.items.findIndex(x=> x._id === id);
    this.selectedItems.push(this.items[idxItem]);

  }


  navigate(value: string)
  {
     this.router.navigate([value], { relativeTo: this.route });
  }

}
