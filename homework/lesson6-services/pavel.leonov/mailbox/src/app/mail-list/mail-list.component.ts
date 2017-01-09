import { Component, OnInit } from '@angular/core';
import { MailboxService } from './mailbox.service';
import { IMailItem } from './mail-item/mail-item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  letters: Observable<IMailItem[]>;

  constructor(private MailboxService: MailboxService) {

  }

  ngOnInit() {
    this.letters = this.MailboxService.getLetters();
  }

}
