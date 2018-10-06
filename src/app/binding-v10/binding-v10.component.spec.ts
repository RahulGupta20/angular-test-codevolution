import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingV10Component } from './binding-v10.component';

describe('BindingV10Component', () => {
  let component: BindingV10Component;
  let fixture: ComponentFixture<BindingV10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingV10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingV10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
