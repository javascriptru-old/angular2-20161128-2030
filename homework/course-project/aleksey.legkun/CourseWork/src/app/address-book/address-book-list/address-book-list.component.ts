import { Component, OnInit } from '@angular/core';
import { Subject }          from 'rxjs/Subject';
import { Observable }       from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';

import { ActivatedRoute, Router } from '@angular/router';

import { IPerson } from './../../interfaces/person';
import { AddressBookService } from './../../services/address-book.service';

@Component({
  selector: 'app-address-book-list',
  templateUrl: './address-book-list.component.html'

})
export class AddressBookListComponent implements OnInit {

 private errorMessage: any;  
  private items: Array<IPerson>;

  constructor(private addressBookService: AddressBookService, 
              private route: ActivatedRoute,
              private router: Router) { 
  
    this.refresh();
  }

  ngOnInit() {
  }

  refresh(){
      this.addressBookService.getList()
                        .subscribe(
                          data => {
                            this.items = data;
                            },
                          error => {
                            this.errorMessage = error;
                          });

  }

  onNew(){
    this.router.navigate(['-1'], { relativeTo: this.route });
  }

   delete(person: IPerson) {
    this.addressBookService.delete(person)
                        .subscribe(
                          data => {

                            let i = this.items.indexOf(person);
                            if(i != -1) 
                              this.items.splice(i, 1);
                    
                            console.log(`${data}`);
                            },
                          error => {this.errorMessage = error;}
                          );
  }  

  generate(){
       this.addressBookService.generate()
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
     this.router.navigate([value], { relativeTo: this.route });
  }  
}
