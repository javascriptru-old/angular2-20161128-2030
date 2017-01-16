import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

/*import { CharacterButtonComponent } from './shared/character-button/character-button.component';
 import { SortCharactersPipe } from './shared/sort-characters.pipe';*/
import {MailsRouterModule, routedComponents} from './mails-routing.module';
// import { SharedModule } from '../shared/shared.module';
import {MailService} from './mail.service';

@NgModule({
  imports: [CommonModule, FormsModule, MailsRouterModule],
  declarations: [routedComponents],
  providers: [MailService]
})
export class MailsModule {
}
