/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HolelListComponent } from './holel-list.component';

describe('HolelListComponent', () => {
  let component: HolelListComponent;
  let fixture: ComponentFixture<HolelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
