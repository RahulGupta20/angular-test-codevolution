import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuctural-directives',
  template: `
    <!-- <h2 *ngIf='displayName; else elseBlock'>My name is Rahul</h2>

    <ng-template #elseBlock>
      <h2>Name is Hidden</h2>
    </ng-template> -->

    <div *ngIf='displayName; then thenBlock; else elseBlock'></div>

    <ng-template #thenBlock>
      <h2>Login page</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Hidden, Register page</h2>
    </ng-template>
  `,
  styleUrls: ['./stuctural-directives.component.css']
})
export class StucturalDirectivesComponent implements OnInit {

  public displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
