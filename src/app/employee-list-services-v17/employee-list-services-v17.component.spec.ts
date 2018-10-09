import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListServicesV17Component } from './employee-list-services-v17.component';

describe('EmployeeListServicesV17Component', () => {
  let component: EmployeeListServicesV17Component;
  let fixture: ComponentFixture<EmployeeListServicesV17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListServicesV17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListServicesV17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
