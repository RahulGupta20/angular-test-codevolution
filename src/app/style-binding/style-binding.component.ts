import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">style binding test</h2>
    <h2 [style.color]="highlightColor">HighLight text color</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: [`
    
  `]
})
export class StyleBindingComponent implements OnInit {

  public name = 'rahul';
  public hasError = true;
  public isSpecial = true;
  public highlightColor = 'yellow';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
