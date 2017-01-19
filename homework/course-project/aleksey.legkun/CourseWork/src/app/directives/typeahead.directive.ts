import { Component, Input, HostListener, ViewContainerRef, ViewChild, ElementRef, Optional  } from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { NgModel } from '@angular/forms';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';

import { ITypeahead } from './../interfaces/typeahead';

@Component({
selector: '[typeahead]',  

 template: `
  <ng-content></ng-content>
  <div #contentWrapper>
    <ul>
      <li *ngFor="let item of items | async" (click)="selectItem(item)">{{item}}</li>
    </ul>    
  </div>
  `
})

export class TypeaheadDirective  {
 
  private items: Observable<string[]>;
  private searchData = new Subject<string>();

  private _filterValue: string;
  private errorMessage: string;

  @Input('typeaheadService') 
  typeaheadService: ITypeahead;
  
  @ViewChild('contentWrapper') 
  content: ElementRef;
 

  constructor(private viewContainerRef: ViewContainerRef,  @Optional() public model: NgModel){

    if (!model)
      throw new Error ("TypeaheadDirective requires ngModel.");

     this.items = this.searchData
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(
        (filter: string) => 
        { 
           filter = (filter ||'').trim();
           if(filter.length>=3)
              return this.typeaheadService.getTypeaheadList(filter, 5)
           return Observable.of<string[]>([]);
        });

  }

  @HostListener('input', ['$event']) 
  oninput(event: any) {
    this._filterValue = event.target.value;
    this.searchData.next(this._filterValue);
  }

  private selectItem(value:string) {
    this._filterValue = value;
    this.model.update.emit(this._filterValue);
    this.searchData.next(undefined); 
  }

  public ngAfterViewInit() {
    //обернем input div-ом
    let el = this.viewContainerRef.element.nativeElement;
    let divEl = document.createElement("div");
    divEl.className = "typeahead";
    el.parentElement.insertBefore(divEl, el.nextSibling);
    divEl.appendChild(el);
    //и к этому div-у добавим content
    divEl.appendChild(this.content.nativeElement);
  }  


}
