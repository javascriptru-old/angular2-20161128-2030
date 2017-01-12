import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchStr:string;
  @Output() onSearchEmitter = new EventEmitter<string>();

  onSearchLetters() {
    console.log('we are looking for: ' + this.searchStr);
    this.onSearchEmitter.emit(this.searchStr);
  }
}
