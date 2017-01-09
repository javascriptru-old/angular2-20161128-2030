import { Component, OnInit, Input } from '@angular/core';
import { IMailItem } from './mail-item.interface';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  @Input('data') data: IMailItem;

  constructor() {

  }

  ngOnInit() {
  }

}
