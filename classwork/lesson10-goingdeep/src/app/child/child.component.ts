import {
  Component,
  Input,
  Output,
  SimpleChange,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'child',
  template: `<div style="border: 2px solid blue; padding: 0.5rem 1rem; margin-top: 4rem;">
	    <h4>Child Component</h4>
	    <p>{{ name }}</p>
    </div>`,
})

export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name;
  @Output() log: EventEmitter<string> = new EventEmitter();

  _onChangesCounter: number = 0;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name changed to "${name}"`);
      }
    }
    this.log.emit(`onChanges (${this._onChangesCounter++}): ${changesMsgs.join('; ')}`);
  }

  ngOnInit() {
    this.log.emit(`onInit`);
  }

  ngDoCheck() {
    this.log.emit(`doCheck`);
  }

  ngAfterContentInit() {
    this.log.emit(`afterContentInit`);
  }

  ngAfterContentChecked() {
    this.log.emit('afterContentChecked');
  }

  ngAfterViewInit() {
    this.log.emit(`afterViewInit`);
  }

  ngAfterViewChecked() {
    this.log.emit(`afterViewChecked`);
  }

  ngOnDestroy() {
    this.log.emit(`onDestroy`);
  }

}