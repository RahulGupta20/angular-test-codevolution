import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction-v15',
  template: `
    <h2>{{'Hello ' + parentData}}</h2>
  `,
  styleUrls: ['./component-interaction-v15.component.css']
})
export class ComponentInteractionV15Component implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
