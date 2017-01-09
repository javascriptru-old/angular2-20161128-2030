import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MailboxService } from './../services/mailbox.service';
import { IMailbox } from './../interfaces/mailbox';
import { IError } from './../interfaces/error';


@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css'],
  providers: [MailboxService]
})
export class MailBoxComponent implements OnInit {
  ngOnInit() {}
  
  @Output() 
  onError = new EventEmitter<IError>();

  public mailBoxes : Array<IMailbox>;
  public errorMessage: string;  

  constructor(private mailboxService: MailboxService) {

    this.mailboxService.getList()
            .subscribe(
                       data => {
                         this.mailBoxes = data as Array<IMailbox>
                         if (this.mailBoxes)
                           this.currentMailbox = this.mailBoxes[0];
                       },
                       error =>  this.errorMessage = <any>error);               
  }

  public currentMailbox: IMailbox;

  public changeBox(mailbox: IMailbox){
    this.currentMailbox = mailbox;
  }

}
