import {Component, OnInit} from '@angular/core';
import {Mail, MailService} from '../mail.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  mails:Mail[];

  constructor(private mailService:MailService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.mails = [];

    this.route
      .params
      .map(params => params['type'])
      .subscribe(type => {
          console.log('action: ' + type);
          this.getMailsByTitle(type);
        }
      );
  }

  private getMailsByTitle(mailboxTitle:string) {
    this.mailService.getMailboxes().subscribe(mailboxes => {
      mailboxes.forEach(mailbox => {
        if (mailbox.title === mailboxTitle) {
          this.mailService.getMailsByMailbox(mailbox._id)
            .do(mails => 'received: ' + mails)
            .subscribe(mails => this.mails = mails);
        }
      });
    });
  }

  onMailClicked(mail:Mail) {
    console.log(mail._id);
  }
}
