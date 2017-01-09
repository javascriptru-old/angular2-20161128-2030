import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailListComponent } from './mail-box/mail-list/mail-list.component';
import { MailItemComponent } from './mail-box/mail-list/mail-item/mail-item.component';

import {GeneratorService} from './/services/generator.service';
import { MailDetailComponent } from './mail-box/mail-list/mail-detail/mail-detail.component';
import { LetterFilterPipe } from './mail-box/mail-list/letter-filter.pipe';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { ResponseService } from './services/response.service';
import { GlobvarService } from './services/globvar.service';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { TypeaheadDirective } from './typeahead/typeahead.directive';


@NgModule({
  declarations: [
    AppComponent,
    MailListComponent,
    MailItemComponent,
    MailDetailComponent,
    LetterFilterPipe,
    MailBoxComponent,
    TypeaheadComponent,
    TypeaheadDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'API_URL', useValue: 'http://test-api.javascript.ru/v1/lexa/'},
    {provide: ResponseService, useClass: ResponseService},
    {provide: GlobvarService, useClass: GlobvarService}
    

    //GeneratorService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
