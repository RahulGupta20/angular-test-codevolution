import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public name = 'Event Binding Practice.';
  public greetUser = '';

  constructor() { }

  ngOnInit() {
  }

  myFunction(){
    console.log("Welcome to Nepal")
    this.greetUser = 'Welcome to beautiful Nepal.';
  }

}
