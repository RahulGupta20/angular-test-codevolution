import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveCNgForDirectiveComponent } from './structural-directive-c-ng-for-directive.component';

describe('StructuralDirectiveCNgForDirectiveComponent', () => {
  let component: StructuralDirectiveCNgForDirectiveComponent;
  let fixture: ComponentFixture<StructuralDirectiveCNgForDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveCNgForDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveCNgForDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
