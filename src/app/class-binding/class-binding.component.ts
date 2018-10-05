import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 class="text-success">Beautiful Nepal</h2>
    <h2 [class]="successClass">Everest</h2>

    <h2 class="text-special" [class]="successClass"> two classes </h2>
    <h2 [class.text-danger]="hasError">Buddha Born In Nepal</h2>

    <h2 [ngClass]="messageClasses">Multiple clssess</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  public name = 'Rahul';
  public successClass =  'text-success';
  public hasError =  false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
