import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <div>
      Welcome {{name.toUpperCase()}}
    </div>
    <h2>
      {{"Welcome " + name}}
    </h2>
    <h2>
      {{greetUser()}}
    </h2>
    <h2>{{siteUrl}}</h2>
  `,
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name = 'rahul';
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello' + this.name;
  }

}
