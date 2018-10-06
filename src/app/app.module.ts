import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { BindingV10Component } from './binding-v10/binding-v10.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    BindingV10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
