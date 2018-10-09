import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { BindingV10Component } from './binding-v10/binding-v10.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StucturalDirectivesComponent } from './stuctural-directives/stuctural-directives.component';
import { StructuralDirectiveBNgSwitchDirectiveComponent } from './structural-directive-b-ng-switch-directive/structural-directive-b-ng-switch-directive.component';
import { StructuralDirectiveCNgForDirectiveComponent } from './structural-directive-c-ng-for-directive/structural-directive-c-ng-for-directive.component';
import { ComponentInteractionV15Component } from './component-interaction-v15/component-interaction-v15.component';
import { EmployeeListServicesV17Component } from './employee-list-services-v17/employee-list-services-v17.component';
import { EmployeeDetailServicesV17Component } from './employee-detail-services-v17/employee-detail-services-v17.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    BindingV10Component,
    TwoWayBindingComponent,
    StucturalDirectivesComponent,
    StructuralDirectiveBNgSwitchDirectiveComponent,
    StructuralDirectiveCNgForDirectiveComponent,
    ComponentInteractionV15Component,
    EmployeeListServicesV17Component,
    EmployeeDetailServicesV17Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
