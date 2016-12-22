import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import {LogService} from './log.service';
import {UserService} from './user-card/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService, 
    //{provide: UserService, useClass: UserService}, 
    //{provide: 'API_URL', useValue: 'http://api.com'}, 
    // {provide: UserService, useFactory: () => {
    //   return new UserService(new LogService());
    // }}, 
    //{provide: new OpaqueToken('NewUserService'), useClass: UserService}, 
    LogService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
