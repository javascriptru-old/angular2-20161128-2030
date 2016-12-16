import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogDirective } from './log.directive';
import { MyPipe } from './my.pipe';
import { UserComponent } from './user/user.component';
import { UserFilterPipe } from './user/user-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogDirective,
    MyPipe,
    UserComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
