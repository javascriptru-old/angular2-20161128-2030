/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LettersService } from './letters.service';

describe('LettersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LettersService]
    });
  });

  it('should ...', inject([LettersService], (service: LettersService) => {
    expect(service).toBeTruthy();
  }));
});
