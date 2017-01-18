import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IUser } from './../iuser';
import { Observable } from 'rxjs/Rx';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserCardComponent } from './user-card.component';
import { UserService } from '../user.service';

let mockUser: IUser;
let spy: jasmine.Spy;
let userService: UserService;

@Component(
  template: '<button log-click></button>'
)
export class TestComponent {}


describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ UserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;

    mockUser = {
      name: 'John',
      age: 21
    };
    userService = fixture.debugElement.injector.get(UserService);
    spy = spyOn(userService, 'getOne').and.returnValue(Observable.of(mockUser));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserService', () => {
    component.someMethod();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set user', () => {
    component.someMethod();
    expect(component.user.name).toEqual('John');
  });
});
