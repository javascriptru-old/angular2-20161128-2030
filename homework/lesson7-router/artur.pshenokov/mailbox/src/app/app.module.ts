import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MailboxService} from './mailbox.service';
import './rxjs-extensions';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MailListComponent} from './main-tabs/mail-list/mail-list.component';
import {UserListComponent} from './main-tabs/user-list/user-list.component';
import {SearchComponent} from './search/search.component';
import {SettingsComponent} from './main-tabs/settings/settings.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { MainTabsComponent } from './main-tabs/main-tabs.component';

const routes:Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'mails',},
  {path: 'mails', component: MailListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MailListComponent,
    SearchComponent,
    UserListComponent,
    SettingsComponent,
    PageNotFoundComponent,
    MainTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
