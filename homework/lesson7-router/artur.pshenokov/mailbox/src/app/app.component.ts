import {Component, OnInit} from '@angular/core';
import {MailboxService, Mailbox, Letter} from './mailbox.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  letters:Letter[];

  constructor(private mailboxService:MailboxService) {
  }

  /*onMailboxSelected(selectedMailbox:Mailbox) {
    console.log('AppComponent selected: ' + selectedMailbox._id);
    this.mailboxService.getLettersByMailbox(selectedMailbox._id)
      .do(letters => console.log(letters))
      .subscribe(letters => {
        this.letters = letters;
      });
  }*/

  onSearchLetters(searchText:string) {
    console.log('searchText: ' + searchText);
    this.mailboxService.getLettersBySearchText(searchText)
      .do(letters => console.log(letters))
      .subscribe(letters => {
        this.letters = letters;
      });
  }
}
