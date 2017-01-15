import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MailComponent} from './pages/mail/mail.component';
import {UsersComponent} from './pages/users/users.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {FolderComponent} from './pages/mail/folder/folder.component';
import {LetterComponent} from './pages/mail/folder/letter/letter.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {UserComponent} from './pages/users/user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        MailComponent,
        UsersComponent,
        PageNotFoundComponent,
        FolderComponent,
        LetterComponent,
        SettingsComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '', pathMatch: 'full', redirectTo: 'mail/inbox'},
            {
                path: 'mail', component: MailComponent,
                children: [
                    {
                        path: ':folderID', component: FolderComponent,
                        children: [
                            {path: ':letterID', component: LetterComponent},
                        ]
                    }
                ]
            },
            {
                path: 'users', component: UsersComponent,
                children: [
                    {path: ':userID', component: UserComponent}
                ]
            },
            {path: 'settings', component: SettingsComponent},
            {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
