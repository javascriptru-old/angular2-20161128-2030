import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {UsersComponent} from './users.component';

const routes:Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UserListComponent},
      { path: ':id', component: UserComponent  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRouterModule {
}

export const routedComponents = [
  UsersComponent,
  UserListComponent,
  UserComponent
];
