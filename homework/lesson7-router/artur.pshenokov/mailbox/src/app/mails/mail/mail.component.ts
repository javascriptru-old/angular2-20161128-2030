import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {MailService, Mail} from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mail: Mail[];

  constructor(private mailService:MailService,
              private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route
      .params
      .map(params => params['id'])
      .subscribe(id => {
          console.log('action: ' + id);
          this.getMailById(id);
        }
      );
  }

  private getMailById(mailId:number) {
    this.mailService.getMailById(mailId).subscribe(mail => {
      this.mail = mail;
    });
  }

}
