import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-v10',
  template: `
    <h2>{{pageDetail}}</h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styleUrls: ['./binding-v10.component.css']
})
export class BindingV10Component implements OnInit {

  public pageDetail = 'Input value binding';
  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
  }

}
