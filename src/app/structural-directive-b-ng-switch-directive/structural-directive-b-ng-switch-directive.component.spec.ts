import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveBNgSwitchDirectiveComponent } from './structural-directive-b-ng-switch-directive.component';

describe('StructuralDirectiveBNgSwitchDirectiveComponent', () => {
  let component: StructuralDirectiveBNgSwitchDirectiveComponent;
  let fixture: ComponentFixture<StructuralDirectiveBNgSwitchDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveBNgSwitchDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveBNgSwitchDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
