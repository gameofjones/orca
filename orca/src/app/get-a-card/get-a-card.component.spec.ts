/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetACardComponent } from './get-a-card.component';

describe('GetACardComponent', () => {
  let component: GetACardComponent;
  let fixture: ComponentFixture<GetACardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetACardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetACardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
