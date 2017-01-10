import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
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
  inputStream: Subject<string>;
  inputObserver: Observer<string>;

  dataList: ITypeaheadResult[];

  o: Observable<string>;
  oo: Observer<string>;
  s: Subject<string>;

  @Input('searchFn') searchFn: ISearchFn;
  @Input('placeholder') placeholder: string;

  constructor() {
    // this.inputStream = new Observable((observer: Observer<string>) => {
    //   this.inputObserver = observer;
    // });

    // this.o = Observable.create((observer: Observer<string>) => {
    //   observer.next('Hello');
    //   setTimeout(() => { observer.next('Hello'); },2000);
    //   setTimeout(() => { observer.next('Hello'); },2000);
    //   setTimeout(() => { observer.next('Hello'); },2000);
    //   setTimeout(() => { observer.next('Hello'); },2000);
    //   observer.complete();
    //   this.oo = observer;
    // });

    this.s = new Subject();
    this.s.next('Hello');
    setTimeout(() => { this.s.next('Hello'); },2000);

    //UserService//getUserObservable//http

    //component1
    this.s.subscribe((message) => {
      console.log(message);
    });
    
    //component2
    this.s.subscribe((message) => {
      console.log(message);
    });

    //component3
    this.s.subscribe((message) => {
      console.log(message);
    });

    //component1
    this.s.next('Hi!');

    //component5
    this.s.next('How do you do!');


    this.inputStream = new Subject();

    this.dataList = [];

    this.inputStream
      .debounceTime(300)
      .distinctUntilChanged()
      .filter((query: string) => query.trim().length > 2)
      .concatMap((query: string) => this.searchFn(query))
      .subscribe((items: ITypeaheadResult[]) => this.dataList = items);
  }

  onInput(query: string) {
    //this.inputObserver.next(query);
    this.inputStream.next(query);
  }

  ngOnInit() {
  }

}
