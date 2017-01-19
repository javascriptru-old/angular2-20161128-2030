import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//components address
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressBookListComponent } from './address-book/address-book-list/address-book-list.component';
import { AddressBookDetailComponent } from './address-book/address-book-detail/address-book-detail.component';

//components address
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailBoxListComponent } from './mail-box/mail-box-list/mail-box-list.component';
import { MailBoxDetailComponent } from './mail-box/mail-box-detail/mail-box-detail.component';



//services
import {GeneratorService} from './/services/generator.service';
import { ResponseService } from './services/response.service';
import { GlobvarService } from './services/globvar.service';
import { AddressBookService } from './services/address-book.service';
import { AuthGuardService } from './services/auth-guard.service';



const appRoutes: Routes = [

  { path: '',   redirectTo: '/mail-box', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent },

  {
    path: 'address-book', component: AddressBookComponent,
    canLoad: [AuthGuardService],
    canActivate : [AuthGuardService],
    canActivateChild : [AuthGuardService],

    children: [
      { path: '',  component: AddressBookListComponent},
      { path: ':id',  component: AddressBookDetailComponent
         
      }
    ]
  },
  
  {
    path: 'mail-box', component: MailBoxComponent,
    canLoad: [AuthGuardService],
    canActivate : [AuthGuardService],
    canActivateChild : [AuthGuardService],

    children: [
      { path: '',  component: MailBoxListComponent},
      { path: ':id', component: MailBoxDetailComponent}
    ]
  }

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}
