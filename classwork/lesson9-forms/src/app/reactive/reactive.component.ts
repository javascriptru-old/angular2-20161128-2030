import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public showError$: Observable<boolean>;
  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      name: formBuilder.group({
        first: ['Nancy', Validators.minLength(2)],
        last: ['Drew', Validators.required],
      }),
      email: ['', [myCheck('A')], [myAsyncCheck]],
    });


  }

  ngOnInit() {
    this.showError$ = this.registrationForm.valueChanges.debounceTime(500)
      .switchMap(() => Observable.of(!this.registrationForm.valid));
  }

}

function myCheck(letter: string) {
  return function myCheck(control: FormControl) {

    let valid = false;
    let count = 10;
    if (letter === 'A') {
      valid = true;
    }

    return valid ? null : { notEnoughAletter: { haveAProblem: true, actual: count } }
  }
}

function myAsyncCheck() {
  console.log('myAsyncCheck');
  return Observable.of({ ASYNC_ERROR: true }).delay(500);
}