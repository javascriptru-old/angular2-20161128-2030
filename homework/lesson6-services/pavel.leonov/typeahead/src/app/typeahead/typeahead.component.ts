import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import { Component, Input, OnInit } from '@angular/core';
import { ISearchFn } from './searchFn.interface';
import { ITypeaheadResult } from './result.interface';

@Component({
  selector: 'typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
  inputStream: Observable<string>;
  inputObserver: Observer<string>;

  dataList: ITypeaheadResult[];

  @Input('searchFn') searchFn: ISearchFn;
  @Input('placeholder') placeholder: string;

  constructor() {
    this.inputStream = new Observable((observer: Observer<string>) => {
      this.inputObserver = observer;
    });

    this.dataList = [];

    this.inputStream
      .debounceTime(300)
      .distinctUntilChanged()
      .filter((query: string) => query.trim().length > 2)
      .concatMap((query: string) => this.searchFn(query))
      .subscribe((items: ITypeaheadResult[]) => this.dataList = items);
  }

  onInput(query: string) {
    this.inputObserver.next(query);
  }

  ngOnInit() {
  }

}
