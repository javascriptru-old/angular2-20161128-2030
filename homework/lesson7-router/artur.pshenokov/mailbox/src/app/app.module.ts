import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MailboxService} from './mailbox.service';
import {SearchComponent} from './search/search.component';

import './rxjs-extensions';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { MailsModule } from './mails/mails.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MailsModule
  ],
  providers: [MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
