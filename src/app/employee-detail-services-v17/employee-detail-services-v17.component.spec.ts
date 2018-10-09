import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailServicesV17Component } from './employee-detail-services-v17.component';

describe('EmployeeDetailServicesV17Component', () => {
  let component: EmployeeDetailServicesV17Component;
  let fixture: ComponentFixture<EmployeeDetailServicesV17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailServicesV17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailServicesV17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
