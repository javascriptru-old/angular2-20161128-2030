import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './inbox/sidebarNav/sidebar-nav.component';
import { MailboxListComponent } from './inbox/sidebarNav/mailboxList/mailbox-list.component';
import { AddMailboxComponent } from './inbox/sidebarNav/mailboxList/addMailbox/add-mailbox.component';
import { DropDownComponent } from './dropDown/drop-down.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './inbox/compose/compose.component';
import { MailComponent } from './inbox/mail/mail.component';
import { OpenedComponent } from './inbox/mail/opened/opened.component';

import { SearchPipe } from './inbox/search.pipe';
import { TypeaheadDirective } from './inbox/compose/typeahead/typeahead.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    MailboxListComponent,
    AddMailboxComponent,
    DropDownComponent,
    InboxComponent,
    ComposeComponent,
    MailComponent,
    OpenedComponent,
    SearchPipe,
    TypeaheadDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
