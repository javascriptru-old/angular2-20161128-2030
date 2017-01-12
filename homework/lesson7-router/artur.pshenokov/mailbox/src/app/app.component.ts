import {Component, OnInit} from '@angular/core';
import {MailboxService, Mailbox, Letter} from './mailbox.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  selectedMailbox:Mailbox;

  constructor(private mailboxService:MailboxService) {
  }

  onMailboxSelected(selectedMailbox: Mailbox) {
    console.log('AppComponent selected: ' + selectedMailbox._id);
    this.selectedMailbox = selectedMailbox;
  }
}
