import { IUser } from './iuser';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

//XHRBackend
let mockUser:IUser;

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [{provide: XHRBackend, useClass: MockBackend},
                  UserService]
    });

    mockUser = {
      name: 'John',
      age: 21
    };
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get one user', inject([XHRBackend, UserService], (mockBackend: MockBackend,service: UserService) => {

    mockBackend.connections.subscribe((connection: MockConnection) => {
      let responseOptions = new ResponseOptions({body: JSON.stringify(mockUser)});
      connection.mockRespond(new Response(responseOptions));
      expect(connection.request.url).toBe('/users/1');
    })

    service.getOne(1).subscribe((user) => {
      console.log(111111);
      expect(user).toEqual(mockUser);
    });
  }));
  // it('should get all users', inject([UserService], (service: UserService) => {
  //   expect(service).toBeTruthy();
  // }));
});
