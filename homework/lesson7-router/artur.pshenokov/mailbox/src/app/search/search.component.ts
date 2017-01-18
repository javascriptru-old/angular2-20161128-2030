import { Component, Output, EventEmitter } from '@angular/core';
import {Mail, SearchService} from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchStr:string;
  mails:Mail[];

  constructor(private searchService:SearchService) {
  }

  onSearchLetters() {
    console.log('we are looking for: ' + this.searchStr);
    this.searchMails(this.searchStr);
  }

  searchMails(searchStr: string) {
    this.searchService.searchMailByText(searchStr)
      .subscribe(mails => {
        this.mails = mails;
      });
  }
}
