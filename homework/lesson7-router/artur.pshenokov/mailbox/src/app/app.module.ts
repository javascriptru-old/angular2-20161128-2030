import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MailboxService} from './mailbox.service';
import './rxjs-extensions';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MailListComponent } from './mail-list/mail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
