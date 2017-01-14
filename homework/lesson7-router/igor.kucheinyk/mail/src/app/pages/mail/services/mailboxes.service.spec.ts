/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MailboxesService } from './mailboxes.service';

describe('MailboxesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailboxesService]
    });
  });

  it('should ...', inject([MailboxesService], (service: MailboxesService) => {
    expect(service).toBeTruthy();
  }));
});
