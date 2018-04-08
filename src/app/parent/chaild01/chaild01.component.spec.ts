import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaild01Component } from './chaild01.component';

describe('Chaild01Component', () => {
  let component: Chaild01Component;
  let fixture: ComponentFixture<Chaild01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chaild01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chaild01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
