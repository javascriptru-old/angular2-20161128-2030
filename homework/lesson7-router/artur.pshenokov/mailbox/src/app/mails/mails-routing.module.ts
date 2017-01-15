import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MailListComponent} from './mail-list/mail-list.component';
import {MailComponent} from './mail/mail.component';
import {MailsComponent} from './mails.component';
import {MailSidebarComponent} from './mail-sidebar/mail-sidebar.component';

const routes:Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/mails' },,
  {
    path: 'mails',
    component: MailsComponent,
    children: [
      {path: ':type', component: MailListComponent},
      {path: ':type/:id', component: MailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailsRouterModule {
}

export const routedComponents = [
  MailsComponent,
  MailListComponent,
  MailComponent,
  MailSidebarComponent
];
