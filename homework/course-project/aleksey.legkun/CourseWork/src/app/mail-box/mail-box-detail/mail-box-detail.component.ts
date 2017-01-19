import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Subject }          from 'rxjs/Subject';
import { Observable }       from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';

import { ILetter } from './../../interfaces/letter';
import { LetterService } from './../../services/letter.service';
import { MailBoxService } from './../../services/mail-box.service';
import { AddressBookService } from './../../services/address-book.service';
import { SimpleValidator } from './../../validators/simple-validator';
import { FormHelper } from './../../helpers/form-helper';

@Component({
  selector: 'app-mail-box-detail',
  templateUrl: './mail-box-detail.component.html'
})
export class MailBoxDetailComponent implements OnInit {

  private form : FormGroup;
  private errorMessage: any;
  
  

  set mailTo(value: string){
    this.form.controls['to'].setValue(value);
  }

  get mailTo(): string{
    return this.form.controls['to'].value;
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

  isSaveDisable()
  {
     return !this.form.dirty || !this.isEnableForm;
  }

  isDeleteDisable()
  {
     return !this.form.dirty || !this.isEnableForm;
  }

  constructor(formBuilder: FormBuilder, private dataService: LetterService, 
              private mailBoxService: MailBoxService,
              private addressBookService: AddressBookService,
              private route: ActivatedRoute,
              private location: Location,
              private changeDetectorRef: ChangeDetectorRef
              ) {

     this.form = formBuilder.group({
          '_id': [null],
          'mailbox': [null, Validators.required],
          'body': [null, Validators.required],
          'subject': [null, Validators.required],
          'to' : [null,  [Validators.required, SimpleValidator.EmailValidate]]
        })

    this.form.valueChanges.subscribe(data=> {
        if(this.errorMessage) 
          this.errorMessage = undefined
        } 
      )
    this.isEnableForm = true;
  }


   private _isNew: boolean = false;
 


  ngOnInit() {
     this.route.params.subscribe((params)=>{

       if(params['id'] !=="new")
       {
          this.dataService.getById(params['id'])
                        .subscribe(
                            data => {
                              FormHelper.setValue(this.form,data)
                              this.mailTo = data.to;
                           },
                              error => {this.errorMessage = error;}
                              );
       }
       else {
          this._isNew = true;
          this.mailBoxService.getByName(this.mailBoxService.OutgoingBox)
                          .subscribe(
                              box => {
                                this.form.controls["mailbox"].setValue(box._id);
                              },
                                error => {this.errorMessage = error;}
                                );
       }
     })
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
            this.addressBookService.saveIfNew(this.form.controls["to"].value);
            FormHelper.setValue(this.form, data);
            this.mailTo = data.to;

            this.isEnableForm = true;
            this.back();            
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
