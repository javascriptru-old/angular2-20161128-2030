import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './search.component';
import {SearchService} from './search.service';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule {
}
