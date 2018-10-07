import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-b-ng-switch-directive',
  template: `
    <div [ngSwitch]='color'>
      <div *ngSwitchCase="'red'">You picked red color.</div>
      <div *ngSwitchCase="'blue'">You picked green color.</div>
      <div *ngSwitchCase="'green'">You picked green color.</div>
      <div *ngSwitchDefault>Please pick again.</div>
    </div>
  `,
  styleUrls: ['./structural-directive-b-ng-switch-directive.component.css']
})
export class StructuralDirectiveBNgSwitchDirectiveComponent implements OnInit {

  public color = 'red';
  constructor() { }

  ngOnInit() {
  }

}
