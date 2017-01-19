import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import { NgModel, NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements AfterViewInit {
  @ViewChild('c') myinput: NgModel;
  @ViewChild('f') myform: NgForm;

  name = {first: 'Nancy', last: 'Drew'};

  constructor() { }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
  setValue() {
    this.name = {first: 'Bess', last: 'Marvin'};
  }

  ngAfterViewInit() {
    this.myform.valueChanges.subscribe((value) => {
       console.log('Form changes:', value);
    });

    this.myinput.valueChanges.subscribe((value) => {
       console.log('Field changes:', value);
    });
  }

}
