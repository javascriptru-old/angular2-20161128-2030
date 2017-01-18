import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor() {
  }

  /*onMailboxSelected(selectedMailbox:Mailbox) {
    console.log('AppComponent selected: ' + selectedMailbox._id);
    this.mailboxService.getLettersByMailbox(selectedMailbox._id)
      .do(letters => console.log(letters))
      .subscribe(letters => {
        this.letters = letters;
      });
  }*/

  /*onSearchLetters(searchText:string) {
    console.log('searchText: ' + searchText);
    this.mailboxService.getLettersBySearchText(searchText)
      .do(letters => console.log(letters))
      .subscribe(letters => {
        this.letters = letters;
      });
  }*/
}
