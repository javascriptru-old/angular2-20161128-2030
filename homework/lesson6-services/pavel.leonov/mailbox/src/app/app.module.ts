import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailItemComponent } from './mail-list/mail-item/mail-item.component';
import { MailboxService } from './mail-list/mailbox.service';

@NgModule({
  declarations: [
    AppComponent,
    MailListComponent,
    MailItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    MailboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
