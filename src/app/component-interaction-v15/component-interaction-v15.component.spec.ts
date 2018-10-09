import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionV15Component } from './component-interaction-v15.component';

describe('ComponentInteractionV15Component', () => {
  let component: ComponentInteractionV15Component;
  let fixture: ComponentFixture<ComponentInteractionV15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionV15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionV15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
