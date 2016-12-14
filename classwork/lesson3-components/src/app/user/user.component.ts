import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

interface User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name: string;
  public titleClass: string = 'title';
  public myColor: string = 'yellow';

  @Input() user: User;
  @Output() onColorChange = new EventEmitter<string>();
  

  constructor() { 
    this.name = 'John';
  }

  sendColor():void {
    this.onColorChange.emit(this.myColor);
  }

  ngOnInit() {
  }

}
