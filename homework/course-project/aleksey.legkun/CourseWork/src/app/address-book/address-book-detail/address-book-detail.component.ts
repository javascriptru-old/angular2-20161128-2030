import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';

import { Subject }          from 'rxjs/Subject';
import { Observable }       from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';
import { ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import { IPerson } from './../../interfaces/person';
import { AddressBookService } from './../../services/address-book.service';
import { SimpleValidator } from './../../validators/simple-validator';
import { FormHelper } from './../../helpers/form-helper';

@Component({
  selector: 'app-address-book-detail',
  templateUrl: './address-book-detail.component.html'

})
export class AddressBookDetailComponent implements OnInit {
 
  private form : FormGroup;
  private errorMessage: any;

  private setValueToForm(obj: any){
    FormHelper.setValue(this.form, obj)
  }
  
  private _isEnableForm: boolean;
  set isEnableForm (value: boolean)
  {
     this._isEnableForm = value;
     FormHelper.setEnable(this.form, this._isEnableForm);
  }

  get isEnableForm (): boolean
  {
     return this._isEnableForm;
  }

  constructor(formBuilder: FormBuilder, 
              private dataService: AddressBookService, 
              private route: ActivatedRoute,
              private location: Location) {

    this.form = formBuilder.group({
          '_id': [null],
          'fullName': [null, Validators.required],
          'email' : [null,  [Validators.required, SimpleValidator.EmailValidate]]
        })

    this.form.valueChanges.subscribe(data=> {
        if(this.errorMessage) 
          this.errorMessage = undefined
        } 
      )
    this.isEnableForm = true;
  }

  ngOnInit() {
     this.route.params.subscribe((params)=>{

       this.dataService.getById(params['id']).subscribe(
            data => {
                        this.setValueToForm(data);
                    },
            error => {this.errorMessage = error;}
            );

    });
  }

  isSaveDisable()
  {
     return !this.form.dirty || !this.isEnableForm;
  }


  submitForm(value: any):void{

    if(!this.form.dirty || !this.form.valid)
    {
      FormHelper.setTouched(this.form, true);
      return;
    }

    this.isEnableForm = false;
    this.dataService.save(this.form.value).subscribe(
          data => {
            this.setValueToForm(data);
            this.isEnableForm = true;
          },
          error => {
            this.isEnableForm = true;
            this.errorMessage = error;
          });
  }


back(notCheck: boolean = false) {
    if(notCheck)
    {
       if(this.form.dirty && !window.confirm('Do you really want to cancel?'))
         return false;
    }
    this.location.back();
}

 delete() {
    if(!window.confirm('Do you really want to delete?'))
      return false;

    this.dataService.delete(this.form.value).subscribe(
                          data => {
                            this.back(false);
                          },
                          error => {
                            this.errorMessage = error;}
                          );
  }  

}
