import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-c-ng-for-directive',
  template: `
    <div *ngFor='let color of colors; index as i'>
      <h2>{{i}} {{color}}</h2>
    </div>
  `,
  styleUrls: ['./structural-directive-c-ng-for-directive.component.css']
})
export class StructuralDirectiveCNgForDirectiveComponent implements OnInit {

  public colors = ['red', 'blue', 'green', 'yellow'];

  constructor() { }

  ngOnInit() {
  }

}
