import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

/*import { CharacterButtonComponent } from './shared/character-button/character-button.component';
 import { SortCharactersPipe } from './shared/sort-characters.pipe';*/
import {UsersRouterModule, routedComponents} from './users-routing.module';
// import { SharedModule } from '../shared/shared.module';
import {UserService} from './user.service';

@NgModule({
  imports: [CommonModule, FormsModule, UsersRouterModule],
  declarations: [routedComponents],
  providers: [UserService]
})
export class UsersModule {
}
