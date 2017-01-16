import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';

const routes = [
  {path: '', component: HomeComponent},
  { path: 'users',
    component: UsersComponent,
    //canActivate: [AuthGuardService],
    //resolve: { user: UserResolver}
    data: {user: {name: 'John'}}},
  { path: 'users',
    component: UsersComponent,
    outlet: 'popup'},

  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

/*
 - canActivate, canActivateChild
 - canDeactivate
 - canLoad
 - resolve
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
