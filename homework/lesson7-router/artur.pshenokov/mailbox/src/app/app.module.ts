import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import './rxjs-extensions';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import {MailsModule} from './mails/mails.module';
import {SearchModule} from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MailsModule,
    SearchModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
