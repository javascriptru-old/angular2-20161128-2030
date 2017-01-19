import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//
import { AppRoutingModule }        from './app-routing.module';

//components
import { AppComponent } from './app.component';

//components address
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressBookListComponent } from './address-book/address-book-list/address-book-list.component';
import { AddressBookDetailComponent } from './address-book/address-book-detail/address-book-detail.component';


//components address
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailBoxListComponent } from './mail-box/mail-box-list/mail-box-list.component';
import { MailBoxDetailComponent } from './mail-box/mail-box-detail/mail-box-detail.component';
import { LoginComponent } from './login/login.component';


//services
import {GeneratorService} from './/services/generator.service';
import { ResponseService } from './services/response.service';
import { GlobvarService } from './services/globvar.service';
import { AddressBookService } from './services/address-book.service';
import { MailBoxService } from './services/mail-box.service';
import { LetterService } from './services/letter.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


//pipes
import { LetterFilterPipe } from './mail-box/mail-box-list/letter-filter.pipe';

//directives
import { TypeaheadDirective } from './directives/typeahead.directive';

@NgModule({
  declarations: [
    AppComponent,
     AddressBookComponent,
     AddressBookListComponent,
     AddressBookDetailComponent,
     MailBoxComponent,
     MailBoxListComponent,
     MailBoxDetailComponent,

     LetterFilterPipe,
     TypeaheadDirective,
     LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule ,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ResponseService, useClass: ResponseService},
    {provide: GlobvarService, useClass: GlobvarService},
    {provide: AddressBookService, useClass: AddressBookService},
    {provide: MailBoxService, useClass: MailBoxService},
    
    {provide: LetterService, useClass: LetterService},
    {provide: GeneratorService, useClass: GeneratorService},
    {provide: AuthService, useClass: AuthService},
    {provide: AuthGuardService, useClass: AuthGuardService},
   
    {provide: FormBuilder, useClass: FormBuilder}
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
