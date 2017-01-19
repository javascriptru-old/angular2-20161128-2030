import { Injectable, Inject, Component } from '@angular/core';
import{ Http, Response }  from '@angular/http';
import { HttpModule, XHRBackend, ResponseOptions } from '@angular/http';

import { Observable }   from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IMailbox } from './../interfaces/mailbox';
import { ResponseService } from './response.service';
import { GlobvarService } from './globvar.service';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { TestBed, async, inject } from '@angular/core/testing';
import { MailBoxService } from './mail-box.service';

//XHRBackend
let mockObject:IMailbox;
let mockArr: Array<IMailbox>;

describe('MailBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [{provide: XHRBackend, useClass: MockBackend},
                  MailBoxService, ResponseService, GlobvarService]
    });

    mockObject = {_id: "3", title: "va3"};

    mockArr = new  Array<IMailbox>();
    mockArr.push({_id: "1", title: "va1"})
    mockArr.push({_id: "2", title: "va2"})
    mockArr.push(mockObject)
    mockArr.push({_id: "4", title: "va4"})    

  });

  it('should ...', inject([MailBoxService], (service: MailBoxService) => {
    expect(service).toBeTruthy();
  }));

  it('should get one obj', inject([XHRBackend, MailBoxService], (mockBackend: MockBackend,service: MailBoxService) => {

    mockBackend.connections.subscribe((connection: MockConnection) => {
      let responseOptions = new ResponseOptions({body: JSON.stringify(mockArr)});
      connection.mockRespond(new Response(responseOptions));
    })

    service.getById("3").subscribe((data) => {
      expect(data).toEqual(mockObject);
    });
  }));
});