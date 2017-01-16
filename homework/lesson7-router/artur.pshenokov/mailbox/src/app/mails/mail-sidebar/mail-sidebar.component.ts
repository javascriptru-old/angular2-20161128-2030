import {Component, OnInit} from '@angular/core';

import {MailService, Mailbox} from '../mail.service';

@Component({
  selector: 'mail-sidebar',
  templateUrl: './mail-sidebar.component.html'
})
export class MailSidebarComponent implements OnInit {

  mailboxes:Mailbox[];

  constructor(private mailService:MailService) {

  }

  ngOnInit() {
    this.mailService.getMailboxes()
      .subscribe(mailboxes => {
        this.mailboxes = mailboxes;
      });
  }
}
